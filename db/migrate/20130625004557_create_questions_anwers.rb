class CreateQuestionsAnwers < ActiveRecord::Migration
  def change
    create_table :questions_anwers do |t|

      t.timestamps
    end
  end
end
