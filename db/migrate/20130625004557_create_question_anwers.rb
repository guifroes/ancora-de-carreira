class CreateQuestionAnwers < ActiveRecord::Migration
  def change
    create_table :question_answers do |t|

      t.timestamps
    end
  end
end
