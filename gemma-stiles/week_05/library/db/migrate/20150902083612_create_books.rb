class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
    	t.text :title
    	t.text :published
    	t.text :genre
    	t.text :image
    	t.timestamps
    end
  end
end
