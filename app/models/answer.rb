class Answer < ActiveRecord::Base
  has_many :question_answers
  validates_presence_of :name, :email, :institution, :course, :final_result
end
