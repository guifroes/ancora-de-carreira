class Answer < ActiveRecord::Base
  has_many :question_answers
  validates_presence_of :name, :email, :institution, :course, :final_result
  accepts_nested_attributes_for :question_answers

  def self.as_csv
    CSV.generate do |csv|
      csv << column_names
      all.each do |item|
        csv << item.attributes.values_at(*column_names)
      end
    end
  end
end
