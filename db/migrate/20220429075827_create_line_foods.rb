class CreateLineFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :line_foods do |t|
      t.references :food, null: false, foreign_key: true
      t.references :restaurant, null: false, foreign_key: true
      t.references :order, foreign_key: true # 注文ID
      t.integer :count, null: false, default: 0 # 商品の個数
      t.boolean :active, null: false, default: false # 仮注文と注文の状態管理

      t.timestamps
    end
  end
end
