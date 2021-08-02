import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createCategories1627864106696 implements MigrationInterface {

  private readonly TABLE_NAME = 'categories'

  public async up(queryRunner: QueryRunner) {
    await queryRunner.createTable(new Table({
      name: this.TABLE_NAME,
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'NOW()',
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'NOW()',
        },
        {
          name: 'deleted_at',
          type: 'timestamp',
          isNullable: true,
        },
      ],
    }))
  }

  public async down(queryRunner: QueryRunner) {
    await queryRunner.dropTable(this.TABLE_NAME)
  }
}
