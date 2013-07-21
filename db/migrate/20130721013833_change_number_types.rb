class ChangeNumberTypes < ActiveRecord::Migration
  def change
    change_column :answers, :tecnica, :decimal
    change_column :answers, :gerencia, :decimal
    change_column :answers, :autonomia, :decimal
    change_column :answers, :seguranca, :decimal
    change_column :answers, :criatividade, :decimal
    change_column :answers, :desafio, :decimal
    change_column :answers, :estilo, :decimal
  end
end
