class AddAnswerToQuestion < ActiveRecord::Migration[4.2]
  def change
    add_column :question_answers, :answer_id, :integer
  end
end
