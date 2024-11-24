// Визначення базових типів
type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
type TimeSlot =
  | "8:30-10:00"
  | "10:15-11:45"
  | "12:15-13:45"
  | "14:00-15:30"
  | "15:45-17:15";
type CourseType = "Lecture" | "Seminar" | "Lab" | "Practice";

// Створення основних структур
type Professor = {
  id: number;
  name: string;
  department: string;
};

type Classroom = {
  number: string;
  capacity: number;
  hasProjector: boolean;
};

type Course = {
  id: number;
  name: string;
  type: CourseType;
};

type Lesson = {
  courseId: number;
  professorId: number;
  classroomNumber: string;
  dayOfWeek: DayOfWeek;
  timeSlot: TimeSlot;
};

type ScheduleConflict = {
  type: "ProfessorConflict" | "ClassroomConflict";
  lessonDetails: Lesson;
};

// Масиви даних
const professors: Professor[] = [];
const classrooms: Classroom[] = [];
const courses: Course[] = [];
const schedule: Lesson[] = [];

/**
 * Додає нового професора до списку.
 * @param {Professor} professor - Об'єкт професора з інформацією про нього.
 * @returns {void}
 */
function addProfessor(professor: Professor): void {
  professors.push(professor);
}

/**
 * Додає нове заняття до розкладу, якщо немає конфліктів.
 * @param {Lesson} lesson - Об'єкт заняття, яке потрібно додати.
 * @returns {boolean} - true, якщо заняття успішно додано; false, якщо є конфлікти.
 */
function addLesson(lesson: Lesson): boolean {
  if (validateLesson(lesson)) return false; // Є конфлікт
  schedule.push(lesson);
  return true;
}

/**
 * Знаходить вільні аудиторії в заданий час і день.
 * @param {TimeSlot} timeSlot - Часовий слот заняття.
 * @param {DayOfWeek} dayOfWeek - День тижня.
 * @returns {string[]} - Список номерів вільних аудиторій.
 */
function findAvailableClassrooms(
  timeSlot: TimeSlot,
  dayOfWeek: DayOfWeek
): string[] {
  const busyClassrooms = schedule
    .filter((lesson) => lesson.timeSlot === timeSlot && lesson.dayOfWeek === dayOfWeek)
    .map((lesson) => lesson.classroomNumber);
  return classrooms
    .filter((classroom) => !busyClassrooms.includes(classroom.number))
    .map((classroom) => classroom.number);
}

/**
 * Повертає розклад заняття для конкретного професора.
 * @param {number} professorId - Ідентифікатор професора.
 * @returns {Lesson[]} - Список занять професора.
 */
function getProfessorSchedule(professorId: number): Lesson[] {
  return schedule.filter((lesson) => lesson.professorId === professorId);
}

/**
 * Перевіряє, чи створює заняття конфлікти в розкладі.
 * @param {Lesson} lesson - Об'єкт заняття для перевірки.
 * @returns {ScheduleConflict | null} - Конфлікт або null, якщо конфліктів немає.
 */
function validateLesson(lesson: Lesson): ScheduleConflict | null {
  for (const scheduledLesson of schedule) {
    if (
      scheduledLesson.timeSlot === lesson.timeSlot &&
      scheduledLesson.dayOfWeek === lesson.dayOfWeek
    ) {
      if (scheduledLesson.professorId === lesson.professorId) {
        return { type: "ProfessorConflict", lessonDetails: scheduledLesson };
      }
      if (scheduledLesson.classroomNumber === lesson.classroomNumber) {
        return { type: "ClassroomConflict", lessonDetails: scheduledLesson };
      }
    }
  }
  return null;
}

/**
 * Обчислює відсоток використання аудиторії.
 * @param {string} classroomNumber - Номер аудиторії.
 * @returns {number} - Відсоток використання аудиторії.
 */
function getClassroomUtilization(classroomNumber: string): number {
  const totalSlots = 5 * 5; // 5 днів на тиждень, 5 часових слотів
  const usedSlots = schedule.filter(
    (lesson) => lesson.classroomNumber === classroomNumber
  ).length;
  return (usedSlots / totalSlots) * 100;
}

/**
 * Визначає найпопулярніший тип занять.
 * @returns {CourseType} - Найпопулярніший тип занять.
 */
function getMostPopularCourseType(): CourseType {
  const typeCount: { [key: string]: number } = {
    Lecture: 0,
    Seminar: 0,
    Lab: 0,
    Practice: 0,
  };

  for (let i = 0; i < schedule.length; i++) {
    const lesson: Lesson = schedule[i];
    const course: Course | undefined = courses.find((c) => c.id === lesson.courseId);
    if (course) {
      typeCount[course.type]++;
    }
  }

  let mostPopularType: CourseType = "Lecture";
  let maxCount: number = 0;

  for (const type in typeCount) {
    if (typeCount[type] > maxCount) {
      maxCount = typeCount[type];
      mostPopularType = type as CourseType;
    }
  }

  return mostPopularType;
}

/**
 * Змінює аудиторію для заняття, якщо це можливо.
 * @param {number} lessonId - Ідентифікатор заняття.
 * @param {string} newClassroomNumber - Новий номер аудиторії.
 * @returns {boolean} - true, якщо аудиторію успішно змінено; false, якщо є конфлікти.
 */
function reassignClassroom(
  lessonId: number,
  newClassroomNumber: string
): boolean {
  const lesson = schedule.find((l) => l.courseId === lessonId);
  if (!lesson) return false;

  const conflict = validateLesson({ ...lesson, classroomNumber: newClassroomNumber });
  if (conflict) return false;

  lesson.classroomNumber = newClassroomNumber;
  return true;
}

/**
 * Видаляє заняття з розкладу за його ідентифікатором.
 * @param {number} lessonId - Ідентифікатор заняття.
 * @returns {void}
 */
function cancelLesson(lessonId: number): void {
  const index = schedule.findIndex((lesson) => lesson.courseId === lessonId);
  if (index !== -1) schedule.splice(index, 1);
}

// Демонстрація роботи
addProfessor({ id: 1, name: "John Smith", department: "Mathematics" });
addProfessor({ id: 2, name: "Jane Doe", department: "Physics" });

classrooms.push({ number: "101", capacity: 30, hasProjector: true });
classrooms.push({ number: "102", capacity: 20, hasProjector: false });

courses.push({ id: 1, name: "Algebra", type: "Lecture" });
courses.push({ id: 2, name: "Quantum Mechanics", type: "Lab" });

addLesson({
  courseId: 1,
  professorId: 1,
  classroomNumber: "101",
  dayOfWeek: "Monday",
  timeSlot: "8:30-10:00",
});
addLesson({
  courseId: 2,
  professorId: 2,
  classroomNumber: "102",
  dayOfWeek: "Monday",
  timeSlot: "10:15-11:45",
});

console.log("Available classrooms:", findAvailableClassrooms("8:30-10:00", "Monday"));
console.log("Professor's schedule:", getProfessorSchedule(1));
console.log("Classroom utilization:", getClassroomUtilization("101"));
console.log("Most popular course type:", getMostPopularCourseType());
