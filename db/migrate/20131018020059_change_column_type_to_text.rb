class ChangeColumnTypeToText < ActiveRecord::Migration
  def change
    change_column :snapkins, :image_url, :text
  end
end
