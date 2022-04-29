class LineFood < ApplicationRecord
  belongs_to :food
  belongs_to :restaurant
  belongs_to :order, optional: true # order(関連付け先)がnilであっても保存ができる(0か1)

  validates :count, numericality: { greater_than: 0 }

  scope :active, -> { where(active: true) } # LineFood.activeでactiveがtrueのレコードを返すスコープメソッド
  scope :other_restaurant, -> (picked_restaurant_id) { where.not(restaurant_id: picked_restaurant_id) }
  # 引数にrestaurant_idを渡すことで他の店舗のLineFoodがあるかどうか？をチェックする。

  def total_amount # 特定のline_foodインスタンスがもつfoodの金額と、数量からline_foodの合計価格を返すインスタンスメソッド
    food.price * count
  end
end
