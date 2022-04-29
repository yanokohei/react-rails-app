class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.integer :total_price, null: false, default: 0 # 合計金額

      t.timestamps
    end
  end
end
