class CreateAuthors < ActiveRecord::Migration
  def change
    create_table :authors do |t|
    	t.text :name
    	t.text :nationality
    	t.text :dob
    	t.text :image
    	t.timestamps
    end
  end
end