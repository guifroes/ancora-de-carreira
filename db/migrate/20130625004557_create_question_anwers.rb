class CreateQuestionAnwers < ActiveRecord::Migration[4.2]
  def change
    create_table :question_answers do |t|

      t.timestamps
    end
  end
end
