class AddInstitutionAndCourseToAnswer < ActiveRecord::Migration
  def change
    add_column :answers, :institution, :text
    add_column :answers, :course, :text
  end
end
