class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.string :name
      t.string :email
      t.string :answer_1
      t.string :answer_2
      t.string :answer_3
      t.string :final_result

      t.timestamps
    end
  end
end
