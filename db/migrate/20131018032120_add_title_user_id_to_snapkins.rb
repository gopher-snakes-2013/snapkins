class AddTitleUserIdToSnapkins < ActiveRecord::Migration
  def up
    add_column :snapkins, :title, :string
  end

  def down
    remove_column :snapkins, :title
  end
end
