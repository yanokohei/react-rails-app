class CreateRestaurants < ActiveRecord::Migration[6.0]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.integer :fee, null: false, default: 0 # 手数料
      t.integer :time_required, null: false # 所要時間(宅配)

      t.timestamps
    end
  end
end
