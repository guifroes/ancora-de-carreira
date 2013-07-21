class AddAncorasIndividuais < ActiveRecord::Migration
  def change
    add_column :answers, :tecnica, :integer
    add_column :answers, :gerencia, :integer
    add_column :answers, :autonomia, :integer
    add_column :answers, :seguranca, :integer
    add_column :answers, :criatividade, :integer
    add_column :answers, :desafio, :integer
    add_column :answers, :estilo, :integer
  end
end
