import {normalizeProfile,type StudentProfile} from './profile.ts';

/**
 * An Auth user is not automatically an onboarded student. This loader accepts
 * modern profiles and genuinely completed legacy profiles while never creating
 * an imaginary profile from the defaults or a failed database request.
 */
export type StoredStudentRow={display_name?:unknown;username?:unknown;biography?:unknown;preferences?:unknown}|null;
export function readStoredStudentProfile(row:StoredStudentRow):StudentProfile|null {
 if(!row||typeof row!=='object'||!row.preferences||typeof row.preferences!=='object'||Array.isArray(row.preferences))return null;
 const p=row.preferences as Record<string,unknown>;
 const nickname=typeof row.display_name==='string'&&row.display_name.trim()?row.display_name:typeof p.nickname==='string'?p.nickname:'';
 const completed=typeof p.completedAt==='string'&&p.completedAt.trim().length>0;
 // Old saved profiles predate completedAt. Only recognize substantive study
 // preferences as a completed profile; no record or empty defaults are insufficient.
 const legacy=typeof nickname==='string'&&nickname.trim().length>0
   &&Array.isArray(p.goals)&&p.goals.length>0
   &&Array.isArray(p.styles)&&p.styles.length>0
   &&Array.isArray(p.weeklyDays)&&p.weeklyDays.length>0;
 if(!completed&&!legacy)return null;
 return normalizeProfile({...p,
   nickname,username:typeof row.username==='string'?row.username:p.username,
   biography:typeof row.biography==='string'?row.biography:p.biography,
   completedAt:completed?p.completedAt:'legacy-profile'
 });
}