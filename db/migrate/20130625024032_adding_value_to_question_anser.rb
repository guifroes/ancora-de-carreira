class AddingValueToQuestionAnser < ActiveRecord::Migration
  def change
    add_column :question_answers, :value, :text
  end
end
