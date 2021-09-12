class RemovinAnswerColumns < ActiveRecord::Migration[4.2]
  def change
    remove_column :answers, :answer_1
    remove_column :answers, :answer_2
    remove_column :answers, :answer_3
  end
end
