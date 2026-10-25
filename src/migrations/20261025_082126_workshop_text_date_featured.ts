import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   -- Keep existing dates, written the way the site displayed them (e.g. 8.12.26)
  ALTER TABLE "workshops" ALTER COLUMN "date" SET DATA TYPE varchar
    USING to_char("date" AT TIME ZONE 'Asia/Jerusalem', 'FMDD.FMMM.YY');
  ALTER TABLE "workshops" ADD COLUMN "featured_on_home" boolean DEFAULT false;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "workshops" ALTER COLUMN "date" SET DATA TYPE timestamp(3) with time zone
    USING to_timestamp("date", 'DD.MM.YY');
  ALTER TABLE "workshops" DROP COLUMN "featured_on_home";`)
}
