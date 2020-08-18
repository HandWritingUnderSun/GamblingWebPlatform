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
   VALUES  ( NEWID() , N'LottoRecord',N'L00',N'',N'�ں�' , N'' ) 
   INSERT INTO dbo.S_FieldsDefine(RID ,TblCod ,FldCod ,DmGrp ,FldCpt ,FieldDsc)
   VALUES  ( NEWID() , N'LottoRecord',N'L01',N'',N'ǰ����һ������' , N'' ) 
      INSERT INTO dbo.S_FieldsDefine(RID ,TblCod ,FldCod ,DmGrp ,FldCpt ,FieldDsc )
   VALUES  ( NEWID() , N'LottoRecord',N'L02',N'',N'ǰ���ڶ�������' , N'' ) 
      INSERT INTO dbo.S_FieldsDefine(RID ,TblCod ,FldCod ,DmGrp ,FldCpt ,FieldDsc )
   VALUES  ( NEWID() , N'LottoRecord',N'L03',N'',N'ǰ������������' , N'' ) 
      INSERT INTO dbo.S_FieldsDefine(RID ,TblCod ,FldCod ,DmGrp ,FldCpt ,FieldDsc )
   VALUES  ( NEWID() , N'LottoRecord',N'L04',N'',N'ǰ�����ĸ�����' , N'' ) 
   INSERT INTO dbo.S_FieldsDefine(RID ,TblCod ,FldCod ,DmGrp ,FldCpt ,FieldDsc )
   VALUES  ( NEWID() , N'LottoRecord',N'L05',N'',N'ǰ�����������' , N'' ) 
      INSERT INTO dbo.S_FieldsDefine(RID ,TblCod ,FldCod ,DmGrp ,FldCpt ,FieldDsc )
   VALUES  ( NEWID() , N'LottoRecord',N'L06',N'',N'������һ������' , N'' ) 
      INSERT INTO dbo.S_FieldsDefine(RID ,TblCod ,FldCod ,DmGrp ,FldCpt ,FieldDsc )
   VALUES  ( NEWID() , N'LottoRecord',N'L07',N'',N'�����ڶ�������' , N'' ) 
   
   