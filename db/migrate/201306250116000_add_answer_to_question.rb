class AddAnswerToQuestion < ActiveRecord::Migration
  def change
    add_column :question_answers, :answer_id, :integer
  end
end
