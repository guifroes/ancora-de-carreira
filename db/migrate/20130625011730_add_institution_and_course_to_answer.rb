class AddInstitutionAndCourseToAnswer < ActiveRecord::Migration
  def change
    add_column :answers, :institution, :text, :after => :email
    add_column :answers, :course, :text, :after => :institution
  end
end
