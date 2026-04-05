/**
 * constants.js — Shared constants and lookup tables.
 * Part of Darktide Scoreboard Tracker.
 */
(function () {
'use strict';
const App = window.App = window.App || {};

const GROUP_COLORS = {
  'row_resource_score': '#4caf50',
  'row_team_score': '#2196f3',
  'row_defense_score': '#ff9800',
  'row_offense_score': '#e94560',
};

const GREY_SHADES = ['#666666', '#777777', '#888888', '#999999', '#555555', '#aaaaaa'];

const MISSION_NAMES = {
  'cm_habs': 'Hab Dreyko',
  'cm_raid': 'Dark Communion',
  'cm_archives': 'Archivum Sycorax',
  'lm_rails': 'Enclavum Baross',
  'lm_scavenge': 'Mercantile HL-70-04',
  'lm_cooling': 'Silo Cluster 18-66/a',
  'fm_armoury': 'Power Matrix HL-17-36',
  'fm_cargo': 'Consignment Yard HL-17-36',
  'fm_resurgence': 'Smelter Complex HL-17-36',
  'dm_stockpile': 'Ascension Riser 31',
  'dm_propaganda': 'Comms-Plex 154/2f',
  'dm_rise': 'Magistrati Oubliette TM8-707',
  'dm_forge': 'Chasm Logistratum',
  'hm_complex': 'Refinery Delta-17',
  'hm_cartel': 'Excise Vault Spireside-13',
  'hm_strain': 'Relay Station TRS-150',
  'km_enforcer': 'Warren 6-19',
  'km_station': 'Chasm Station HL-16-11',
  'km_heresy': 'Vigil Station Oblivium',
  'km_enforcer_twins': 'Orthus Offensive',
  'core_research': 'Clandestium Gloriana',
  'op_train': 'Rolling Steel',
  'op_no_mans_land': 'Battle for Tertium',
  'hub_ship': 'Mourningstar (Hub)',
  'exp_wastes': 'Expeditions',
  'psykhanium': 'Mortis Trials',
};

const MISSION_NAMES_ZH = {
  'cm_habs': '德雷克居住区',
  'cm_raid': '黑暗传教团',
  'cm_archives': '塞科拉克斯档案馆',
  'lm_rails': '隘口后勤处',
  'lm_scavenge': 'HL-70-04 贸易区',
  'lm_cooling': '18-66/a 水仓群',
  'fm_armoury': 'HL-17-36 电力矩阵',
  'fm_cargo': 'HL-17-36 货运站',
  'fm_resurgence': 'HL-17-36 冶炼厂大楼',
  'dm_stockpile': '31号升降机',
  'dm_propaganda': '154/2f 通讯站',
  'dm_rise': 'TM8-708 法庭密牢',
  'dm_forge': '隘口后勤处',
  'hm_complex': 'D17 - 精炼厂',
  'hm_cartel': '尖塔区 - 13赃物库',
  'hm_strain': '中继站 TRS-150',
  'km_enforcer': '窄道 6-19',
  'km_station': 'HL-16-11 隘口站',
  'km_heresy': '奥布里维姆监测站',
  'km_enforcer_twins': '奥都斯攻势 (双子)',
  'core_research': '荣光女王秘所',
  'op_train': '钢轮滚滚',
  'op_no_mans_land': 'Battle for Tertium',
  'hub_ship': 'Mourningstar (Hub)',
  'exp_wastes': 'Expeditions',
  'psykhanium': 'Mortis Trials',
};

const DEFAULT_DIFFICULTY_NAMES = {
  0: 'Sedition',
  1: 'Uprising',
  2: 'Malice',
  3: 'Heresy',
  4: 'Damnation',
  5: 'Auric',
};

const DEFAULT_DIFFICULTY_NAMES_ZH = {
  0: '煽动',
  1: '起义',
  2: '憎恶',
  3: '异端',
  4: '诅咒',
  5: '锐金',
};

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
const COLOR_CODE_PATTERN = /\{#color\([^)]*\)\}|\{#reset\(\)\}/g;

const DEFAULT_GROUP_ID = 'row_resource_score';
const DEFAULT_GROUP_NAME = 'Resource & Teamwork';

const INGEST_BATCH_SIZE = 200;
const MAX_SELECTED_PROPERTIES = 5;
const LONG_GAME_THRESHOLD_SECONDS = 1200;
const FLOAT_EPSILON = 1e-9;

const RANGE_DAYS = { '7d': 7, '30d': 30, '90d': 90, '365d': 365 };

const PROPERTY_LEVEL_COLORS = ['#ffffff', '#a0a0b0', '#707078'];

// Exports
App.GROUP_COLORS = GROUP_COLORS;
App.GREY_SHADES = GREY_SHADES;
App.MISSION_NAMES = MISSION_NAMES;
App.MISSION_NAMES_ZH = MISSION_NAMES_ZH;
App.DEFAULT_DIFFICULTY_NAMES = DEFAULT_DIFFICULTY_NAMES;
App.DEFAULT_DIFFICULTY_NAMES_ZH = DEFAULT_DIFFICULTY_NAMES_ZH;
App.UUID_PATTERN = UUID_PATTERN;
App.COLOR_CODE_PATTERN = COLOR_CODE_PATTERN;
App.DEFAULT_GROUP_ID = DEFAULT_GROUP_ID;
App.DEFAULT_GROUP_NAME = DEFAULT_GROUP_NAME;
App.INGEST_BATCH_SIZE = INGEST_BATCH_SIZE;
App.MAX_SELECTED_PROPERTIES = MAX_SELECTED_PROPERTIES;
App.LONG_GAME_THRESHOLD_SECONDS = LONG_GAME_THRESHOLD_SECONDS;
App.FLOAT_EPSILON = FLOAT_EPSILON;
App.RANGE_DAYS = RANGE_DAYS;
App.PROPERTY_LEVEL_COLORS = PROPERTY_LEVEL_COLORS;
})();
