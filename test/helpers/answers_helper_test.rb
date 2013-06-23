require 'test_helper'

class AnswersHelperTest < ActionView::TestCase
  setup do
    @answer_defaults = {
      name: 'Guilherme Froes',
      email: 'guilherme.froes@gmail.com',
      answer_1: 2,
      answer_2: 10,
      answer_3: 6,
      final_result: 'some result'
    }
  end

  test "should be invalid if missing data" do
    answer = Answer.new
    assert !answer.valid?
    [:name, :email, :answer_1, :answer_2, :answer_3, :final_result].each do |field_name|
      assert answer.errors.keys.include? field_name
    end
  end

  test "should be valid if required data exists" do
    answer = Answer.new(@answer_defaults)
    assert answer.valid?
  end
end
