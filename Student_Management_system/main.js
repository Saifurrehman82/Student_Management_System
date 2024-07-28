"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.courses = [];
        this.balance = 0;
        this.id = this.generateStudentID();
    }
    Student.prototype.generateStudentID = function () {
        return (++Student.idCounter).toString();
    };
    Student.prototype.enroll = function (course) {
        this.courses.push(course);
        this.balance += 600; // Assuming each course costs $600
    };
    Student.prototype.viewBalance = function () {
        return this.balance;
    };
    Student.prototype.payTuition = function (amount) {
        this.balance -= amount;
        console.log("Paid $".concat(amount, ". Remaining balance: $").concat(this.balance));
    };
    Student.prototype.showStatus = function () {
        console.log("\nName: ".concat(this.firstName, " ").concat(this.lastName));
        console.log("Student ID: ".concat(this.id));
        console.log("Courses Enrolled: ".concat(this.courses.join(', ')));
        console.log("Balance: $".concat(this.balance, "\n"));
    };
    Student.idCounter = 10000;
    return Student;
}());
var students = [];
var mainMenu = function () { return __awaiter(void 0, void 0, void 0, function () {
    var action, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                    {
                        type: 'list',
                        name: 'action',
                        message: 'Choose an action:',
                        choices: ['Add New Student', 'Enroll in Course', 'View Balance', 'Pay Tuition', 'Show Status', 'Exit']
                    }
                ])];
            case 1:
                action = (_b.sent()).action;
                _a = action;
                switch (_a) {
                    case 'Add New Student': return [3 /*break*/, 2];
                    case 'Enroll in Course': return [3 /*break*/, 4];
                    case 'View Balance': return [3 /*break*/, 6];
                    case 'Pay Tuition': return [3 /*break*/, 8];
                    case 'Show Status': return [3 /*break*/, 10];
                    case 'Exit': return [3 /*break*/, 12];
                }
                return [3 /*break*/, 13];
            case 2: return [4 /*yield*/, addNewStudent()];
            case 3:
                _b.sent();
                return [3 /*break*/, 13];
            case 4: return [4 /*yield*/, enrollInCourse()];
            case 5:
                _b.sent();
                return [3 /*break*/, 13];
            case 6: return [4 /*yield*/, viewBalance()];
            case 7:
                _b.sent();
                return [3 /*break*/, 13];
            case 8: return [4 /*yield*/, payTuition()];
            case 9:
                _b.sent();
                return [3 /*break*/, 13];
            case 10: return [4 /*yield*/, showStatus()];
            case 11:
                _b.sent();
                return [3 /*break*/, 13];
            case 12:
                console.log('Exiting...');
                process.exit();
                _b.label = 13;
            case 13: return [4 /*yield*/, mainMenu()];
            case 14:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); };
var addNewStudent = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, firstName, lastName, student;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                    { type: 'input', name: 'firstName', message: 'Enter first name:' },
                    { type: 'input', name: 'lastName', message: 'Enter last name:' }
                ])];
            case 1:
                _a = _b.sent(), firstName = _a.firstName, lastName = _a.lastName;
                student = new Student(firstName, lastName);
                students.push(student);
                console.log("Student ".concat(firstName, " ").concat(lastName, " added with ID: ").concat(student['id']));
                return [2 /*return*/];
        }
    });
}); };
var enrollInCourse = function () { return __awaiter(void 0, void 0, void 0, function () {
    var student, course;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, selectStudent()];
            case 1:
                student = _a.sent();
                return [4 /*yield*/, inquirer_1.default.prompt([
                        { type: 'input', name: 'course', message: 'Enter course to enroll:' }
                    ])];
            case 2:
                course = (_a.sent()).course;
                student.enroll(course);
                console.log("Enrolled in course: ".concat(course));
                return [2 /*return*/];
        }
    });
}); };
var viewBalance = function () { return __awaiter(void 0, void 0, void 0, function () {
    var student;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, selectStudent()];
            case 1:
                student = _a.sent();
                console.log("Current balance: $".concat(student.viewBalance()));
                return [2 /*return*/];
        }
    });
}); };
var payTuition = function () { return __awaiter(void 0, void 0, void 0, function () {
    var student, amount;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, selectStudent()];
            case 1:
                student = _a.sent();
                return [4 /*yield*/, inquirer_1.default.prompt([
                        { type: 'input', name: 'amount', message: 'Enter amount to pay:', validate: function (input) {
                                var value = parseFloat(input);
                                if (isNaN(value) || value <= 0) {
                                    return 'Please enter a valid amount.';
                                }
                                return true;
                            }
                        }
                    ])];
            case 2:
                amount = (_a.sent()).amount;
                student.payTuition(parseFloat(amount));
                return [2 /*return*/];
        }
    });
}); };
var showStatus = function () { return __awaiter(void 0, void 0, void 0, function () {
    var student;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, selectStudent()];
            case 1:
                student = _a.sent();
                student.showStatus();
                return [2 /*return*/];
        }
    });
}); };
var selectStudent = function () { return __awaiter(void 0, void 0, void 0, function () {
    var studentId, student;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                    { type: 'input', name: 'studentId', message: 'Enter student ID:' }
                ])];
            case 1:
                studentId = (_a.sent()).studentId;
                student = students.find(function (s) { return s['id'] === studentId; });
                if (!!student) return [3 /*break*/, 3];
                console.log('Student not found.');
                return [4 /*yield*/, selectStudent()];
            case 2: return [2 /*return*/, _a.sent()];
            case 3: return [2 /*return*/, student];
        }
    });
}); };
(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Welcome to the Student Management System');
                return [4 /*yield*/, mainMenu()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
