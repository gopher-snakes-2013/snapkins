class AddVersionsTable < ActiveRecord::Migration
  def up
    create_table :versions do |t|
      t.text :image_url
      t.integer :snapkin_id
    end
  end

  def down
    drop_table :versions
  end
end
