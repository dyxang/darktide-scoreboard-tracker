/**
 * i18n.js — Internationalization utilities.
 * Part of Darktide Scoreboard Tracker.
 */
(function () {
'use strict';
const App = window.App || {};

// Translation objects
const translations = {
  en: {
    // Ingestion bar
    'Choose Scoreboard Directory': 'Choose Scoreboard Directory',
    'Change Directory': 'Change Directory',
    'Re-scan Files': 'Re-scan Files',
    'Import Scoreboard Files': 'Import Scoreboard Files',
    'Your browser does not support the File System Access API. Automatic re-scanning is not available. Use Chrome, Opera, or Edge for full functionality.': 'Your browser does not support the File System Access API. Automatic re-scanning is not available. Use Chrome, Opera, or Edge for full functionality.',
    'games in database': 'games in database',
    'Reset Settings': 'Reset Settings',
    'Reset DB': 'Reset DB',
    
    // Controls
    'Property': 'Property',
    'Select property...': 'Select property...',
    'Range': 'Range',
    'All Time': 'All Time',
    'Last 7 Days': 'Last 7 Days',
    'Last 30 Days': 'Last 30 Days',
    'Last 90 Days': 'Last 90 Days',
    'Last 365 Days': 'Last 365 Days',
    'Custom Dates': 'Custom Dates',
    'Last N Games': 'Last N Games',
    'Select date range...': 'Select date range...',
    'Result': 'Result',
    'All': 'All',
    'Won Only': 'Won Only',
    'Won and Lost 20+ minutes': 'Won and Lost 20+ minutes',
    'Lost Only': 'Lost Only',
    'Difficulty': 'Difficulty',
    'Mission': 'Mission',
    'Modifier': 'Modifier',
    'Manage Players': 'Manage Players',
    
    // Error banner
    'Dismiss': 'Dismiss',
    
    // Stats box
    'General': 'General',
    'Time:': 'Time:',
    'Games:': 'Games:',
    'W\u2011rate:': 'W\u2011rate',
    'Streaks:': 'Streaks:',
    'Relative': 'Relative',
    'Together:': 'Together:',
    'Apart:': 'Apart:',
    'Avg:': 'Avg:',
    'Top in:': 'Top in:',
    'Avg dev:': 'Avg dev:',
    
    // Graph toggles
    'Per name': 'Per name',
    'Per minute': 'Per minute',
    'vs Average': 'vs Average',
    'Compare everyone to the whole team\'s average.': 'Compare everyone to the whole team\'s average.',
    'vs Others': 'vs Others',
    'Set a main player first': 'Set a main player first',
    'Compare the main player to the average of the others.': 'Compare the main player to the average of the others.',
    'Hide unnamed': 'Hide unnamed',
    'Hide bots': 'Hide bots',
    'Bar chart': 'Bar chart',
    'X: Time': 'X: Time',
    'X: Game #': 'X: Game #',
    'Bar chart always uses game number': 'Bar chart always uses game number',
    
    // Chart overlay
    'Initializing database...': 'Initializing database...',
    'Loading...': 'Loading...',
    'Importing...': 'Importing...',
    'Choose the Scoreboard mod history directory to get started': 'Choose the Scoreboard mod history directory to get started',
    'No data': 'No data',
    
    // Footer
    '© Darktide Scoreboard Tracker - Licensed under': '© Darktide Scoreboard Tracker - Licensed under',
    'PolyForm Noncommercial 1.0.0': 'PolyForm Noncommercial 1.0.0',
    'Contribute on': 'Contribute on',
    'GitHub': 'GitHub',
    
    // Player management dialog
    'Player Management': 'Player Management',
    'Min games:': 'Min games:',
    'players shown': 'players shown',
    'Custom name': 'Custom name',
    'games': 'games',
    'Save': 'Save',
    'Clear': 'Clear',
    'Main': 'Main',
    'Set Main': 'Set Main',
    
    // Path hint
    'The default location of scoreboard files is:': 'The default location of scoreboard files is:',
    'Example:': 'Example:',
    'Click anywhere to dismiss': 'Click anywhere to dismiss',
    
    // Ingestion progress
    'Starting ingestion...': 'Starting ingestion...',
    'Done:': 'Done:',
    'new games ingested': 'new games ingested',
    'total files': 'total files',
    'Ingestion failed:': 'Ingestion failed:',
    
    // Confirmation dialogs
    'This will delete all imported data. Continue?': 'This will delete all imported data. Continue?',
    'Reset all settings to defaults?': 'Reset all settings to defaults?',
    
    // Error messages
    'Failed to load game data.': 'Failed to load game data.',
    'Failed to initialize database:': 'Failed to initialize database:',
    
    // Tooltip texts
    'Total playtime:': 'Total playtime:',
    'Won': 'Won',
    'out of': 'out of',
    'games. Win rate:': 'games. Win rate:',
    'Winning streak:': 'Winning streak:',
    'games\nLosing streak:': 'games\nLosing streak:',
    'games': 'games',
    'Played': 'Played',
    'games together': 'games together',
    'Win rate together:': 'Win rate together:',
    'games apart': 'games apart',
    'Win rate apart:': 'Win rate apart:',
    'Was in first place in': 'Was in first place in',
    'better': 'better',
    'worse': 'worse',
    'than average': 'than average',
    
    // Language selector
    'Language': 'Language',
    'English': 'English',
    'Chinese': '中文',
    
    // Export
    'Export Chart': 'Export Chart',
    'Export Report': 'Export Report',
    'Export failed': 'Export failed',
    'Please try again': 'Please try again',
    
    // Layout
    'Layout': 'Layout',
    'Vertical': 'Vertical',
    'Horizontal': 'Horizontal',
    
    // Missions
    'Hab Dreyko': 'Hab Dreyko',
    'Dark Communion': 'Dark Communion',
    'Archivum Sycorax': 'Archivum Sycorax',
    'Enclavum Baross': 'Enclavum Baross',
    'Mercantile HL-70-04': 'Mercantile HL-70-04',
    'Silo Cluster 18-66/a': 'Silo Cluster 18-66/a',
    'Power Matrix HL-17-36': 'Power Matrix HL-17-36',
    'Consignment Yard HL-17-36': 'Consignment Yard HL-17-36',
    'Smelter Complex HL-17-36': 'Smelter Complex HL-17-36',
    'Ascension Riser 31': 'Ascension Riser 31',
    'Comms-Plex 154/2f': 'Comms-Plex 154/2f',
    'Magistrati Oubliette TM8-707': 'Magistrati Oubliette TM8-707',
    'Chasm Logistratum': 'Chasm Logistratum',
    'Refinery Delta-17': 'Refinery Delta-17',
    'Excise Vault Spireside-13': 'Excise Vault Spireside-13',
    'Relay Station TRS-150': 'Relay Station TRS-150',
    'Warren 6-19': 'Warren 6-19',
    'Chasm Station HL-16-11': 'Chasm Station HL-16-11',
    'Vigil Station Oblivium': 'Vigil Station Oblivium',
    'Orthus Offensive': 'Orthus Offensive',
    'Clandestium Gloriana': 'Clandestium Gloriana',
    'Rolling Steel': 'Rolling Steel',
    'Battle for Tertium': 'Battle for Tertium',
    'Mourningstar (Hub)': 'Mourningstar (Hub)',
    'Expeditions': 'Expeditions',
    'Mortis Trials': 'Mortis Trials',
    
    // Difficulties
    'Sedition': 'Sedition',
    'Uprising': 'Uprising',
    'Malice': 'Malice',
    'Heresy': 'Heresy',
    'Damnation': 'Damnation',
    'Auric': 'Auric'
  },
  zh: {
    // Ingestion bar
    'Choose Scoreboard Directory': '选择记分板目录',
    'Change Directory': '更改目录',
    'Re-scan Files': '重新扫描文件',
    'Import Scoreboard Files': '导入记分板文件',
    'Your browser does not support the File System Access API. Automatic re-scanning is not available. Use Chrome, Opera, or Edge for full functionality.': '您的浏览器不支持文件系统访问 API。无法自动重新扫描。请使用 Chrome、Opera 或 Edge 以获得完整功能。',
    'games in database': '个游戏在数据库中',
    'Reset Settings': '重置设置',
    'Reset DB': '重置数据库',
    
    // Controls
    'Property': '属性',
    'Select property...': '选择属性...',
    'Range': '范围',
    'All Time': '所有时间',
    'Last 7 Days': '最近 7 天',
    'Last 30 Days': '最近 30 天',
    'Last 90 Days': '最近 90 天',
    'Last 365 Days': '最近 365 天',
    'Custom Dates': '自定义日期',
    'Last N Games': '最近 N 场游戏',
    'Select date range...': '选择日期范围...',
    'Result': '结果',
    'All': '全部',
    'Won Only': '仅胜局',
    'Won and Lost 20+ minutes': '胜局及20分钟以上的辜负',
    'Lost Only': '仅辜负',
    'Difficulty': '难度',
    'Mission': '任务',
    'Modifier': '修改器（词条）',
    'Manage Players': '管理玩家',
    
    // Error banner
    'Dismiss': '关闭',
    
    // Stats box
    'General': '总体',
    'Time:': '时间:',
    'Games:': '游戏:',
    'W\u2011rate:': '胜率:',
    'Streaks:': '连胜/连败:',
    'Relative': '相对',
    'Together:': '一起:',
    'Apart:': '分开:',
    'Avg:': '平均:',
    'Top in:': '最佳:',
    'Avg dev:': '平均偏差:',
    
    // Graph toggles
    'Per name': '按名称',
    'Per minute': '每分钟',
    'vs Average': '对比平均值',
    'Compare everyone to the whole team\'s average.': '将每个人与整个团队的平均值进行比较。',
    'vs Others': '对比其他人',
    'Set a main player first': '请先设置一个主要玩家',
    'Compare the main player to the average of the others.': '将主要玩家与其他人的平均值进行比较。',
    'Hide unnamed': '隐藏未命名',
    'Hide bots': '隐藏机器人',
    'Bar chart': '条形图',
    'X: Time': 'X: 时间',
    'X: Game #': 'X: 游戏 #',
    'Bar chart always uses game number': '条形图始终使用游戏编号',
    
    // Chart overlay
    'Initializing database...': '正在初始化数据库...',
    'Loading...': '加载中...',
    'Importing...': '导入中...',
    'Choose the Scoreboard mod history directory to get started': '选择记分板模组历史目录以开始',
    'No data': '无数据',
    
    // Footer
    '© Darktide Scoreboard Tracker - Licensed under': '© Darktide 记分板追踪器 - 根据以下许可证授权',
    'PolyForm Noncommercial 1.0.0': 'PolyForm 非商业 1.0.0',
    'Contribute on': '在以下平台贡献',
    'GitHub': 'GitHub',
    
    // Player management dialog
    'Player Management': '玩家管理',
    'Min games:': '最少游戏数:',
    'players shown': '名玩家显示',
    'Custom name': '自定义名称',
    'games': '场游戏',
    'Save': '保存',
    'Clear': '清除',
    'Main': '主要',
    'Set Main': '设为主要',
    
    // Path hint
    'The default location of scoreboard files is:': '记分板文件的默认位置是:',
    'Example:': '示例:',
    'Click anywhere to dismiss': '点击任意位置关闭',
    
    // Ingestion progress
    'Starting ingestion...': '开始导入...',
    'Done:': '完成:',
    'new games ingested': '个新游戏已导入',
    'total files': '个文件总数',
    'Ingestion failed:': '导入失败:',
    
    // Confirmation dialogs
    'This will delete all imported data. Continue?': '这将删除所有导入的数据。继续？',
    'Reset all settings to defaults?': '将所有设置重置为默认值？',
    
    // Error messages
    'Failed to load game data.': '加载游戏数据失败。',
    'Failed to initialize database:': '初始化数据库失败:',
    
    // Tooltip texts
    'Total playtime:': '总游戏时间:',
    'Won': '胜利',
    'out of': '场，共',
    'games. Win rate:': '场游戏。胜率:',
    'Winning streak:': '当前连胜:',
    'games\nLosing streak:': '场\n当前连败:',
    'games': '场',
    'Played': '共同游玩',
    'games together': '场',
    'Win rate together:': '共同游玩胜率:',
    'games apart': '场',
    'Win rate apart:': '分开游玩胜率:',
    'Was in first place in': '在',
    'better': '更好',
    'worse': '更差',
    'than average': '于平均值',
    
    // Language selector
    'Language': '语言',
    'English': '英语',
    'Chinese': '中文',
    
    // Export
    'Export Chart': '导出图表',
    'Export Report': '导出报告',
    'Export failed': '导出失败',
    'Please try again': '请重试',
    
    // Layout
    'Layout': '布局',
    'Vertical': '垂直',
    'Horizontal': '水平',
    
    // Missions
    'Hab Dreyko': '德雷克居住区',
    'Dark Communion': '黑暗传教团',
    'Archivum Sycorax': '塞科拉克斯档案馆',
    'Enclavum Baross': '隘口后勤处',
    'Mercantile HL-70-04': 'HL-70-04 贸易区',
    'Silo Cluster 18-66/a': '18-66/a 水仓群',
    'Power Matrix HL-17-36': 'HL-17-36 电力矩阵',
    'Consignment Yard HL-17-36': 'HL-17-36 货运站',
    'Smelter Complex HL-17-36': 'HL-17-36 冶炼厂大楼',
    'Ascension Riser 31': '31号升降机',
    'Comms-Plex 154/2f': '154/2f 通讯站',
    'Magistrati Oubliette TM8-707': 'TM8-708 法庭密牢',
    'Chasm Logistratum': '隘口后勤处',
    'Refinery Delta-17': 'D17 - 精炼厂',
    'Excise Vault Spireside-13': '尖塔区 - 13赃物库',
    'Relay Station TRS-150': '中继站 TRS-150',
    'Warren 6-19': '窄道 6-19',
    'Chasm Station HL-16-11': 'HL-16-11 隘口站',
    'Vigil Station Oblivium': '奥布里维姆监测站',
    'Orthus Offensive': '奥都斯攻势 (双子)',
    'Clandestium Gloriana': '荣光女王秘所',
    'Rolling Steel': '钢轮滚滚',
    'Battle for Tertium': '无人区',
    'Mourningstar (Hub)': '荣光女王的会所',
    'Expeditions': '远征',
    'Mortis Trials': '死灵试炼',
    
    // Difficulties
    'Sedition': '煽动',
    'Uprising': '起义',
    'Malice': '憎恶',
    'Heresy': '异端',
    'Damnation': '诅咒',
    'Auric': '锐金',
  }
};



// Current language
let currentLang = 'en';

// Translation function
function t(key) {
  return translations[currentLang][key] || translations.en[key] || key;
}

// Set language
function setLanguage(lang) {
  if (translations[lang]) {
    currentLang = lang;
    return true;
  }
  return false;
}

// Get current language
function getLanguage() {
  return currentLang;
}

// Export to App namespace
App.i18n = {
  t,
  setLanguage,
  getLanguage,
  translations
};

window.App = App;

})();
