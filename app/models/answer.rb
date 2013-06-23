class Answer < ActiveRecord::Base
  validates_presence_of :name, :email, :answer_1, :answer_2, :answer_3, :final_result
end
