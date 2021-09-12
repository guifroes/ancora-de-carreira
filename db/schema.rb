# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 201306250116000) do

  create_table "answers", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "final_result"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text "institution"
    t.text "course"
    t.decimal "tecnica"
    t.decimal "gerencia"
    t.decimal "autonomia"
    t.decimal "seguranca"
    t.decimal "criatividade"
    t.decimal "desafio"
    t.decimal "estilo"
    t.decimal "servico"
  end

  create_table "question_answers", force: :cascade do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text "value"
    t.integer "answer_id"
  end

end
