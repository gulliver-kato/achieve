class Player
  def hand
    while true
          puts "数字を入力してください。"
          puts "0:　グー"
          puts "1:　チョキ"
          puts "2:　パー"
          number = gets.chomp

          if number == "0"
            return 0
          elsif number == "1"
            return 1
          elsif number == "2"
            return 2
          else
           puts "0〜2の数字を入力してください"
         end
    end
  end
end

class Enemy
  def hand
    # グー、チョキ、パーの値をランダムに出力するメソッドの処理をこの中に作成する
    answer =["グー","チョキ","パー"]
    enemy = answer[rand(answer.length)]

   if enemy == "グー"
     return 0
   elsif enemy == "チョキ"
     return 1
   elsif enemy == "パー"
     return 2
   end
 end
end

class Janken
  def pon(player_hand, enemy_hand)
    answer =["グー","チョキ","パー"]
    result = (player_hand - enemy_hand + 3) % 3
    if result == 0
      puts "引き分けです"
      player = Player.new
      enemy = Enemy.new
      janken = Janken.new
      # 下記の記述で、ジャンケンメソッドが起動される
      janken.pon(player.hand, enemy.hand)
      return
     elsif result == 2
        result_txst = "勝ち"
      elsif result == 1
        result_txst = "負け"
      end
      puts "相手は#{answer[enemy_hand]}です。あなたの#{result_txst}です"
    end
  end


player = Player.new
enemy = Enemy.new
janken = Janken.new

# 下記の記述で、ジャンケンメソッドが起動される
janken.pon(player.hand, enemy.hand)
