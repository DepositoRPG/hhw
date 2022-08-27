#==============================================================================
#　＋＋　タイトル画面カスタマイズ　ver. 1.11　＋＋
#　　Script by パラ犬
#　　http://2d6.parasite.jp/
#------------------------------------------------------------------------------
# タイトルメニューに画像を使用、もしくはメニューの文字を変更します。
#==============================================================================

module PARA_TITLE_CUSTOM
  
  # メニューコマンドに画像を使う（ true / false ）
  IMG_MENU = true

#↓---メニューコマンドに画像を使う時の設定---

  # メニューコマンドに使う画像ファイル名（「Graphics/Titles」にインポート ）
  #（ 書式は [ コマンド未選択時 , コマンドが選択されたとき ] ）

  # ニューゲーム
  IMG_NEWGAME = ["newgame","newgame_active"]
  IMG_NEWGAME_X = 450   # 横位置
  IMG_NEWGAME_Y = 320   # 縦位置
  # コンティニュー
  IMG_LOAD = ["continue","continue_active"]
  IMG_LOAD_X = 450   # 横位置
  IMG_LOAD_Y = 360   # 縦位置
  # シャットダウン
  IMG_END = ["shutdown","shutdown_active"]
  IMG_END_X = 450   # 横位置
  IMG_END_Y = 400   # 縦位置
  
  # コンテニュー無効時（ 0:半透明 / 1:画像を指定 ）
  LOAD_DISABLED_TYPE = 0
  
  # コンティニュー無効時の画像
  IMG_LOAD_DISABLED = ["continue_disabled","continue_disabled_active"]
  
  # 画像の合成方法（ 0:通常 / 1:加算  / 2:減算 ）
  BLEND_TYPE = 0

#↓---メニューコマンドに画像を使わない時の設定---
  
  # メニューコマンドの文字列
  MENU_NEWGAME = "ニューゲーム"  # ニューゲーム
  MENU_LOAD = "コンティニュー"   # コンティニュー
  MENU_END = "シャットダウン"    # シャットダウン

  # ウインドウ枠を非表示（ true / false ）
  WINDOW_TRANS = false
  # ウインドウの透明度（ウインドウ枠を表示している時に指定）
  WINDOW_OPACITY = 160

  # ウインドウの横サイズ
  WINDOW_WIDTH = 192
  # ウインドウの横位置（ 0:座標指定 / 1:左端  / 2:中央 / 3:右端 ）
  WINDOW_ALIGN = 2
  # 「座標指定」の時のウインドウの横座標
  WINDOW_POS_X = 0
  # ウインドウの縦位置（ 0:座標指定 / 1:上端  / 2:中央 / 3:下端 ）
  WINDOW_VALIGN = 0
  # 「座標指定」の時のウインドウの縦座標
  WINDOW_POS_Y = 288

end

# ↑ 設定項目ここまで
#------------------------------------------------------------------------------

#==============================================================================
# ■ Scene_Title
#==============================================================================

class Scene_Title
  #--------------------------------------------------------------------------
  # ● メイン処理
  #--------------------------------------------------------------------------
  def main
    # 戦闘テストの場合
    if $BTEST
      battle_test
      return
    end
    # データベースをロード
    $data_actors        = load_data("Data/Actors.rxdata")
    $data_classes       = load_data("Data/Classes.rxdata")
    $data_skills        = load_data("Data/Skills.rxdata")
    $data_items         = load_data("Data/Items.rxdata")
    $data_weapons       = load_data("Data/Weapons.rxdata")
    $data_armors        = load_data("Data/Armors.rxdata")
    $data_enemies       = load_data("Data/Enemies.rxdata")
    $data_troops        = load_data("Data/Troops.rxdata")
    $data_states        = load_data("Data/States.rxdata")
    $data_animations    = load_data("Data/Animations.rxdata")
    $data_tilesets      = load_data("Data/Tilesets.rxdata")
    $data_common_events = load_data("Data/CommonEvents.rxdata")
    $data_system        = load_data("Data/System.rxdata")
    # システムオブジェクトを作成
    $game_system = Game_System.new
    # タイトルグラフィックを作成
    @sprite = Sprite.new
    @sprite.bitmap = RPG::Cache.title($data_system.title_name)
    # コマンドウィンドウを作成
    s1 = PARA_TITLE_CUSTOM::MENU_NEWGAME
    s2 = PARA_TITLE_CUSTOM::MENU_LOAD
    s3 = PARA_TITLE_CUSTOM::MENU_END
    w = PARA_TITLE_CUSTOM::WINDOW_WIDTH
    @command_window = Window_Command.new(w, [s1, s2, s3])
    if PARA_TITLE_CUSTOM::WINDOW_TRANS
      @command_window.opacity = 0
    else
      @command_window.back_opacity = PARA_TITLE_CUSTOM::WINDOW_OPACITY
    end
    # ウインドウの位置を指定
    case PARA_TITLE_CUSTOM::WINDOW_ALIGN
      when 0
        @command_window.x = PARA_TITLE_CUSTOM::WINDOW_POS_X
      when 1
        @command_window.x = 0
      when 2
        @command_window.x = ( 640 - @command_window.width ) / 2
      when 3
        @command_window.x = 640 - @command_window.width
    end
    case PARA_TITLE_CUSTOM::WINDOW_VALIGN
      when 0
        @command_window.y = PARA_TITLE_CUSTOM::WINDOW_POS_Y
      when 1
        @command_window.y = 0
      when 2
        @command_window.y = ( 480 - @command_window.height ) / 2
      when 3
        @command_window.y = 480 - @command_window.height
    end
    # コンティニュー有効判定
    # セーブファイルがひとつでも存在するかどうかを調べる
    # 有効なら @continue_enabled を true、無効なら false にする
    @continue_enabled = false
    for i in 0..3
      if FileTest.exist?("Save#{i+1}.rxdata")
        @continue_enabled = true
      end
    end
    # コマンドに画像を使う
    if PARA_TITLE_CUSTOM::IMG_MENU
      @command_window.visible = false
      @command_img0 = Sprite.new
      @command_img0.blend_type = PARA_TITLE_CUSTOM::BLEND_TYPE
      @command_img0.bitmap = RPG::Cache.title(PARA_TITLE_CUSTOM::IMG_NEWGAME[0])
      @command_img0.x = PARA_TITLE_CUSTOM::IMG_NEWGAME_X
      @command_img0.y = PARA_TITLE_CUSTOM::IMG_NEWGAME_Y
      @command_img1 = Sprite.new
      @command_img1.blend_type = PARA_TITLE_CUSTOM::BLEND_TYPE
      @command_img1.bitmap = RPG::Cache.title(PARA_TITLE_CUSTOM::IMG_LOAD[0])
      @command_img1.x = PARA_TITLE_CUSTOM::IMG_LOAD_X
      @command_img1.y = PARA_TITLE_CUSTOM::IMG_LOAD_Y
      @command_img2 = Sprite.new
      @command_img2.blend_type = PARA_TITLE_CUSTOM::BLEND_TYPE
      @command_img2.bitmap = RPG::Cache.title(PARA_TITLE_CUSTOM::IMG_END[0])
      @command_img2.x = PARA_TITLE_CUSTOM::IMG_END_X
      @command_img2.y = PARA_TITLE_CUSTOM::IMG_END_Y
      # コンティニューが有効な場合、カーソルをコンティニューに合わせる
      # 無効な場合、コンティニューの文字を半透明にする
      if @continue_enabled
        select_img_item(1)
      else
        case PARA_TITLE_CUSTOM::LOAD_DISABLED_TYPE
          when 0
            @command_img1.opacity = 160
          when 1
            @command_img1.bitmap = RPG::Cache.title(PARA_TITLE_CUSTOM::IMG_LOAD_DISABLED[0])
        end
        select_img_item(0)
      end
    end
    # タイトル BGM を演奏
    $game_system.bgm_play($data_system.title_bgm)
    # ME、BGS の演奏を停止
    Audio.me_stop
    Audio.bgs_stop
    # トランジション実行
    Graphics.transition
    # メインループ
    loop do
      # ゲーム画面を更新
      Graphics.update
      # 入力情報を更新
      Input.update
      # フレーム更新
      update
      # 画面が切り替わったらループを中断
      if $scene != self
        break
      end
    end
    # トランジション準備
    Graphics.freeze
    # コマンドウィンドウを解放
    @command_window.dispose
    if PARA_TITLE_CUSTOM::IMG_MENU
      @command_img0.dispose
      @command_img1.dispose
      @command_img2.dispose
    end
    # タイトルグラフィックを解放
    @sprite.bitmap.dispose
    @sprite.dispose
  end
  #--------------------------------------------------------------------------
  # ● フレーム更新
  #--------------------------------------------------------------------------
  alias update_para_tcst update
  def update
    update_para_tcst
    if PARA_TITLE_CUSTOM::IMG_MENU
      if Input.repeat?(Input::UP) or Input.repeat?(Input::DOWN)
        # 画像切り替え
        select_img_item(@command_window.index)
      end
    end
  end
  #--------------------------------------------------------------------------
  # ○ メニュー選択時の画像切り替え
  #--------------------------------------------------------------------------
  def select_img_item(index)
    @command_window.index = index
    # すべて非選択
    @command_img0.bitmap = RPG::Cache.title(PARA_TITLE_CUSTOM::IMG_NEWGAME[0])
    case PARA_TITLE_CUSTOM::LOAD_DISABLED_TYPE
      when 0
        @command_img1.bitmap = RPG::Cache.title(PARA_TITLE_CUSTOM::IMG_LOAD[0])
      when 1
        if @continue_enabled
          @command_img1.bitmap = RPG::Cache.title(PARA_TITLE_CUSTOM::IMG_LOAD[0])
        else
          @command_img1.bitmap = RPG::Cache.title(PARA_TITLE_CUSTOM::IMG_LOAD_DISABLED[0])
        end
    end
    @command_img2.bitmap = RPG::Cache.title(PARA_TITLE_CUSTOM::IMG_END[0])
    # 選択画像の切り替え
    case @command_window.index
      when 0  # ニューゲーム
        @command_img0.bitmap = RPG::Cache.title(PARA_TITLE_CUSTOM::IMG_NEWGAME[1])
      when 1  # コンティニュー
        case PARA_TITLE_CUSTOM::LOAD_DISABLED_TYPE
          when 0
            @command_img1.bitmap = RPG::Cache.title(PARA_TITLE_CUSTOM::IMG_LOAD[1])
          when 1
            if @continue_enabled
              @command_img1.bitmap = RPG::Cache.title(PARA_TITLE_CUSTOM::IMG_LOAD[1])
            else
              @command_img1.bitmap = RPG::Cache.title(PARA_TITLE_CUSTOM::IMG_LOAD_DISABLED[1])
            end
          end
      when 2  # シャットダウン
      @command_img2.bitmap = RPG::Cache.title(PARA_TITLE_CUSTOM::IMG_END[1])
    end
  end
end
