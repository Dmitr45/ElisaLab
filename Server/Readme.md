<br>База данных: 
<br>MySQL 8.0
<br>ip: 79.174.89.11
<br>port: 19731
<br>user: AdminElisa
<br>password: admin_NSU_24

<br>Название основной базы: ElisaStorage
<br>Название теневой базы, если понадобится:  shadowElisa

<br>===============================================================================================================

<br>// Пропишем модель юзер
<br>model User {
<br>  id         Int   @id @default(autoincrement())
<br>  email      String   @unique
<br>  phone      Int?
<br>  telegram   String?
<br>  hash       String   @map("password_hash")
<br>  first_name String?
<br>  last_name  String?
<br>  age        Int?
<br>  role       Role     @default(USER)
<br>  posts      Post[]
<br>  metods_Elisa Metods_Elisa[]
<br>  created_at DateTime @default(now())
<br>  updated_at DateTime @updatedAt

<br>  @@map("users")
<br>}

==================================================================================================================

<br>enum Role {
<br>  USER
<br>  ADMIN
<br>}

