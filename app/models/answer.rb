class Answer < ActiveRecord::Base
  has_many :questions_answers
  validates_presence_of :name, :email, :institution, :course, :final_result
end
