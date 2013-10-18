class RemoveImageurlFromSnapkins < ActiveRecord::Migration
  def up
    remove_column :snapkins, :image_url
  end

  def down
    add_column :snapkins, :image_url, :text
  end
end
