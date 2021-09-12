class AddingValueToQuestionAnser < ActiveRecord::Migration[4.2]
  def change
    add_column :question_answers, :value, :text
  end
end
