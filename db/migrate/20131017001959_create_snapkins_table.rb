class CreateSnapkinsTable < ActiveRecord::Migration
  def up
    create_table :snapkins do |t|
      t.string :image_url
      t.timestamps
    end
  end

  def down
    drop_table :snapkins
  end
end
