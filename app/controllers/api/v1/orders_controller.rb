module Api
  module V1
    class OrdersController < ApplicationController
      def create
        posted_line_foods = LineFood.where(id: params[:line_food_ids]) # 仮注文IDを受け取って注文を受け取る
        order = Order.new(
          total_price: total_price(posted_line_foods), # 総合計金額を引数にorderインスタンスを作成
        )
        if order.save_with_update_line_foods!(posted_line_foods) # LineFoodデータの更新(activeをfalseに)と、Orderデータの保存処理を行う
          render json: {}, status: :no_content # 注文が完了したため、仮注文は空となる
        else
          render json: {}, status: :internal_server_error
        end
      end

      private

      def total_price(posted_line_foods) # 仮注文の合計金額と仮注文したレストランの手数料を足して、総合計金額を出す
        posted_line_foods.sum {|line_food| line_food.total_amount } + posted_line_foods.first.restaurant.fee
      end
    end
  end
end
