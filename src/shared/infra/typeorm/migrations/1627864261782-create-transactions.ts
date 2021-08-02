import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createTransactions1627864261782 implements MigrationInterface {

  private readonly TABLE_NAME = 'transactions'

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
          name: 'value',
          type: 'numeric',
          precision: 14,
          scale: 4
        },
        {
          name: 'description',
          type: 'varchar',
          isNullable: true,
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
        {
          name: "user_id",
          type: "integer",
          isNullable: true,
        },
        {
          name: "category_id",
          type: "integer",
          isNullable: true,
        },
      ],
      foreignKeys: [
        {
          name: "FKTrasactionUser",
          referencedTableName: "users",
          referencedColumnNames: ["id"],
          columnNames: ["user_id"],
          onDelete: "SET NULL",
          onUpdate: "SET NULL",
        },
        {
          name: "FKTrasactionCategory",
          referencedTableName: "categories",
          referencedColumnNames: ["id"],
          columnNames: ["category_id"],
          onDelete: "SET NULL",
          onUpdate: "SET NULL",
        },
      ],
    }))
  }

  public async down(queryRunner: QueryRunner) {
    await queryRunner.dropTable(this.TABLE_NAME)
  }
}
