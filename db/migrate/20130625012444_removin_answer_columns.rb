class RemovinAnswerColumns < ActiveRecord::Migration
  def change
    remove_column :answers, :answer_1
    remove_column :answers, :answer_2
    remove_column :answers, :answer_3
  end
end
