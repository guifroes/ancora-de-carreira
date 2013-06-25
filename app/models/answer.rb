class Answer < ActiveRecord::Base
  has_many :question_answers
  validates_presence_of :name, :email, :institution, :course, :final_result
  accepts_nested_attributes_for :question_answers
end
