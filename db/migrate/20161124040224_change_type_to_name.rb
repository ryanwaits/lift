class ChangeTypeToName < ActiveRecord::Migration[5.0]
  def change
    add_column :lifts, :name, :string
    remove_column :lifts, :type, :string
  end
end
