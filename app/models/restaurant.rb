class Restaurant < ApplicationRecord
  has_many :foods
  has_many :line_foods, through: :foods #(foodテーブルを介してn個のline_foodsテーブルを持つ)

  validates :name, :fee, :time_required, presence: true
  validates :name, length: { maximum: 30 }
  validates :fee, numericality: { greater_than: 0 } # 数値のバリデーション(手数料が0より大きいこと)
end
