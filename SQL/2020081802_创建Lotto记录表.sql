USE Lottery
IF NOT EXISTS ( SELECT  1
                FROM    sysobjects
                WHERE   id = OBJECT_ID('LottoRecord')
                        AND type = 'U' )
    BEGIN
        CREATE TABLE LottoRecord
            (
              RID UNIQUEIDENTIFIER NOT NULL ,
              L00 INT NOT NULL,
              L01 INT NOT NULL,
              L02 INT NOT NULL,
              L03 INT NOT NULL,
              L04 INT NOT NULL,
              L05 INT NOT NULL,
              L06 INT NOT NULL,
              L07 INT NOT NULL,
              CONSTRAINT PK_LottoRecord PRIMARY KEY ( RID )
            );
    END;
      INSERT INTO dbo.S_FieldsDefine(RID ,TblCod ,FldCod ,DmGrp ,FldCpt ,FieldDsc)
   VALUES  ( NEWID() , N'LottoRecord',N'L00',N'',N'期号' , N'' ) 
   INSERT INTO dbo.S_FieldsDefine(RID ,TblCod ,FldCod ,DmGrp ,FldCpt ,FieldDsc)
   VALUES  ( NEWID() , N'LottoRecord',N'L01',N'',N'前区第一个数字' , N'' ) 
      INSERT INTO dbo.S_FieldsDefine(RID ,TblCod ,FldCod ,DmGrp ,FldCpt ,FieldDsc )
   VALUES  ( NEWID() , N'LottoRecord',N'L02',N'',N'前区第二个数字' , N'' ) 
      INSERT INTO dbo.S_FieldsDefine(RID ,TblCod ,FldCod ,DmGrp ,FldCpt ,FieldDsc )
   VALUES  ( NEWID() , N'LottoRecord',N'L03',N'',N'前区第三个数字' , N'' ) 
      INSERT INTO dbo.S_FieldsDefine(RID ,TblCod ,FldCod ,DmGrp ,FldCpt ,FieldDsc )
   VALUES  ( NEWID() , N'LottoRecord',N'L04',N'',N'前区第四个数字' , N'' ) 
   INSERT INTO dbo.S_FieldsDefine(RID ,TblCod ,FldCod ,DmGrp ,FldCpt ,FieldDsc )
   VALUES  ( NEWID() , N'LottoRecord',N'L05',N'',N'前区第五个数字' , N'' ) 
      INSERT INTO dbo.S_FieldsDefine(RID ,TblCod ,FldCod ,DmGrp ,FldCpt ,FieldDsc )
   VALUES  ( NEWID() , N'LottoRecord',N'L06',N'',N'后区第一个数字' , N'' ) 
      INSERT INTO dbo.S_FieldsDefine(RID ,TblCod ,FldCod ,DmGrp ,FldCpt ,FieldDsc )
   VALUES  ( NEWID() , N'LottoRecord',N'L07',N'',N'后区第二个数字' , N'' ) 
   
   