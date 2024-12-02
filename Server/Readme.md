База данных:
MySQL 8.0
ip: 79.174.89.11
port: 19731
user: AdminElisa
password: admin_NSU_24

Название основной базы: ElisaStorage
Название теневой базы, если понадобится:  shadowElisa

===============================================================================================================

// Пропишем модель юзер
model User {
  id         Int   @id @default(autoincrement())
  email      String   @unique
  phone      Int?
  telegram   String?
  hash       String   @map("password_hash")
  first_name String?
  last_name  String?
  age        Int?
  role       Role     @default(USER)
  posts      Post[]
  metods_Elisa Metods_Elisa[]
  created_at DateTime @default(now())
  updated_at DateTime @updatedAt

  @@map("users")
}

==================================================================================================================

enum Role {
  USER
  ADMIN
}

