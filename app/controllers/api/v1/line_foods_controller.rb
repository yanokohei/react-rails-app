module Api
  module V1
    class LineFoodsController < ApplicationController
      before_action :set_food, only: %i[create]

      def create
      # LineFoodのクラスメソッドでactiveがtrueの仮注文リストを呼び出して、
      # そのリストにother_restaurantで引数に追加したメニューに他のレストランのメニューを取り出し、exists?で有無を真偽値で返す
      # 他店のメニューが存在する場合は早期リターンで双方の店名を返す
      if LineFood.active.other_restaurant(@ordered_food.restaurant.id).exists?
          return render json: {
            existing_restaurant: LineFood.other_restaurant(@ordered_food.restaurant.id).first.restaurant.name,
            new_restaurant: Food.find(params[:food_id]).restaurant.name,
          }, status: :not_acceptable # 不可
        end

        set_line_food(@ordered_food) # 追加するメニューを渡して仮注文を追加or新規作成し@line_foodを返す

        if @line_food.save
          render json: {
            line_food: @line_food
          }, status: :created
        else
          render json: {}, status: :internal_server_error
        end
      end

      private

      def set_food
        @ordered_food = Food.find(params[:food_id])
      end

      def set_line_food(ordered_food)
        if ordered_food.line_food.present? # 追加したメニューが仮注文に既にあるか
          @line_food = ordered_food.line_food
          @line_food.attributes = { # @line_foodの属性値を指定する。(仮注文状態にし、注文数を追加)
            count: ordered_food.line_food.count + params[:count],
            active: true
          }
        else
          @line_food = ordered_food.build_line_food( # メニューが仮注文にない場合は仮注文を新しくbuildする
            count: params[:count],
            restaurant: ordered_food.restaurant,
            active: true
          )
        end
      end
    end
  end
end
