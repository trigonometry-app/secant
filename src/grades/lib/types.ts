export type Assignment = {
  earned: number;
  possible: number;
  ogType?: string;
  ogScore?: number;
  name: string;
  // date?: string;
  missing: boolean;
  category: string;
};
export type CategoryInfo = {
  earned: number;
  possible: number;
  weight: number;
};

export type ClassGrade = {
  period: number;
  title: string;
  assignments: Assignment[];
  futureAssignments: {
    points: number;
    category: string;
    name: string;
  }[];
  failedAssignments?: { name: string }[];
  categories: Record<string, CategoryInfo>;
  /** True when all categories were auto-generated because the class has no StudentVUE category breakdown */
  syntheticCategories?: true;
  reportedGrade?: number;
  reportedCategories?: Record<string, CategoryInfo>;
};
