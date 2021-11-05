/*
 Navicat Premium Data Transfer

 Source Server         : Assentrix
 Source Server Type    : MySQL
 Source Server Version : 100420
 Source Host           : localhost:3306
 Source Schema         : assentrixdb

 Target Server Type    : MySQL
 Target Server Version : 100420
 File Encoding         : 65001

 Date: 05/11/2021 19:39:01
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for approval_journal
-- ----------------------------
DROP TABLE IF EXISTS `approval_journal`;
CREATE TABLE `approval_journal`  (
  `ApprovalID` int(11) NOT NULL,
  `LeaveRequestID` int(11) NULL DEFAULT NULL,
  `ApprovalStatus` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ApprovalID`) USING BTREE,
  INDEX `LeaveRequestID`(`LeaveRequestID`) USING BTREE,
  CONSTRAINT `approval_journal_ibfk_1` FOREIGN KEY (`LeaveRequestID`) REFERENCES `leave_request` (`EntryID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of approval_journal
-- ----------------------------

-- ----------------------------
-- Table structure for approval_journal_rows
-- ----------------------------
DROP TABLE IF EXISTS `approval_journal_rows`;
CREATE TABLE `approval_journal_rows`  (
  `EntryID` int(11) NOT NULL,
  `ApprovalID` int(11) NULL DEFAULT NULL,
  `ApprovalSequence` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Stage` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Approver` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `ResponseDate` datetime(0) NULL DEFAULT NULL,
  `StageStatus` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Remarks` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`EntryID`) USING BTREE,
  INDEX `ApprovalID`(`ApprovalID`) USING BTREE,
  CONSTRAINT `approval_journal_rows_ibfk_1` FOREIGN KEY (`ApprovalID`) REFERENCES `approval_journal` (`ApprovalID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of approval_journal_rows
-- ----------------------------

-- ----------------------------
-- Table structure for approval_stage
-- ----------------------------
DROP TABLE IF EXISTS `approval_stage`;
CREATE TABLE `approval_stage`  (
  `EntryID` int(11) NOT NULL,
  `StageName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Reviewed` int(255) NULL DEFAULT NULL,
  `Approved` int(255) NULL DEFAULT NULL,
  PRIMARY KEY (`EntryID`) USING BTREE,
  INDEX `Reviewed`(`Reviewed`) USING BTREE,
  INDEX `Approved`(`Approved`) USING BTREE,
  CONSTRAINT `approval_stage_ibfk_1` FOREIGN KEY (`Reviewed`) REFERENCES `employee` (`IDNumber`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `approval_stage_ibfk_2` FOREIGN KEY (`Approved`) REFERENCES `employee` (`IDNumber`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of approval_stage
-- ----------------------------

-- ----------------------------
-- Table structure for department
-- ----------------------------
DROP TABLE IF EXISTS `department`;
CREATE TABLE `department`  (
  `EntryID` int(11) NOT NULL,
  `Description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`EntryID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of department
-- ----------------------------

-- ----------------------------
-- Table structure for employee
-- ----------------------------
DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee`  (
  `IDNumber` int(255) NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `MiddleName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `LastName` int(11) NULL DEFAULT NULL,
  `Suffix` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Department` int(255) NULL DEFAULT NULL,
  `ApprovalStage` int(11) NULL DEFAULT current_timestamp(11),
  `EmployeeType` int(255) NULL DEFAULT NULL,
  `PersonnelType` int(255) NULL DEFAULT NULL,
  `Password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Active` bit(64) NULL DEFAULT NULL,
  PRIMARY KEY (`IDNumber`) USING BTREE,
  INDEX `EmployeeType`(`EmployeeType`) USING BTREE,
  INDEX `PersonnelType`(`PersonnelType`) USING BTREE,
  INDEX `Department`(`Department`) USING BTREE,
  CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`EmployeeType`) REFERENCES `employee_type` (`Code`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `employee_ibfk_2` FOREIGN KEY (`PersonnelType`) REFERENCES `personnel_type` (`Code`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `employee_ibfk_3` FOREIGN KEY (`Department`) REFERENCES `department` (`EntryID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of employee
-- ----------------------------

-- ----------------------------
-- Table structure for employee_type
-- ----------------------------
DROP TABLE IF EXISTS `employee_type`;
CREATE TABLE `employee_type`  (
  `Code` int(255) NOT NULL,
  `Description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Code`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of employee_type
-- ----------------------------

-- ----------------------------
-- Table structure for leave_journal
-- ----------------------------
DROP TABLE IF EXISTS `leave_journal`;
CREATE TABLE `leave_journal`  (
  `EntryID` int(11) NOT NULL,
  `LeaveRequestID` int(11) NULL DEFAULT NULL,
  `Date` datetime(0) NULL DEFAULT NULL,
  `EmployeeCode` int(255) NULL DEFAULT NULL,
  `LeaveCode` int(255) NULL DEFAULT NULL,
  `Value` int(255) NULL DEFAULT NULL,
  PRIMARY KEY (`EntryID`) USING BTREE,
  INDEX `LeaveRequestID`(`LeaveRequestID`) USING BTREE,
  INDEX `EmployeeCode`(`EmployeeCode`) USING BTREE,
  INDEX `LeaveCode`(`LeaveCode`) USING BTREE,
  CONSTRAINT `leave_journal_ibfk_1` FOREIGN KEY (`LeaveRequestID`) REFERENCES `leave_request` (`EntryID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `leave_journal_ibfk_2` FOREIGN KEY (`EmployeeCode`) REFERENCES `employee` (`IDNumber`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `leave_journal_ibfk_3` FOREIGN KEY (`LeaveCode`) REFERENCES `leave_request` (`LeaveType`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of leave_journal
-- ----------------------------

-- ----------------------------
-- Table structure for leave_request
-- ----------------------------
DROP TABLE IF EXISTS `leave_request`;
CREATE TABLE `leave_request`  (
  `EntryID` int(11) NOT NULL,
  `EmployeeCode` int(255) NULL DEFAULT NULL,
  `LeaveType` int(255) NULL DEFAULT NULL,
  `Reason` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `RequestDate` datetime(0) NULL DEFAULT NULL,
  `EffectiveDate` datetime(0) NULL DEFAULT NULL,
  `LeaveJournal` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `ApprovalID` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`EntryID`) USING BTREE,
  INDEX `LeaveType`(`LeaveType`) USING BTREE,
  INDEX `EmployeeCode`(`EmployeeCode`) USING BTREE,
  INDEX `EntryID`(`EntryID`) USING BTREE,
  CONSTRAINT `leave_request_ibfk_1` FOREIGN KEY (`LeaveType`) REFERENCES `leave_type` (`Code`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `leave_request_ibfk_2` FOREIGN KEY (`EmployeeCode`) REFERENCES `employee` (`IDNumber`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of leave_request
-- ----------------------------

-- ----------------------------
-- Table structure for leave_type
-- ----------------------------
DROP TABLE IF EXISTS `leave_type`;
CREATE TABLE `leave_type`  (
  `Code` int(255) NOT NULL,
  `Description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Code`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of leave_type
-- ----------------------------

-- ----------------------------
-- Table structure for personnel_type
-- ----------------------------
DROP TABLE IF EXISTS `personnel_type`;
CREATE TABLE `personnel_type`  (
  `Code` int(255) NOT NULL,
  `Descripton` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Code`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of personnel_type
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
