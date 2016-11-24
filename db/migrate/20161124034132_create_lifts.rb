class CreateLifts < ActiveRecord::Migration[5.0]
  def change
    create_table :lifts do |t|
      t.date :date
      t.string :type
      t.integer :weight_lifted
      t.integer :sets
      t.integer :reps
      t.integer :onerm

      t.timestamps
    end
  end
end
