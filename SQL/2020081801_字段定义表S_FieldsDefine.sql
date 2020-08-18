USE Lottery;
IF NOT EXISTS ( SELECT  1
                FROM    sysobjects
                WHERE   id = OBJECT_ID('S_FieldsDefine')
                        AND type = 'U' )
    BEGIN
        CREATE TABLE [dbo].[S_FieldsDefine]
            (
              [RID] [UNIQUEIDENTIFIER] NOT NULL PRIMARY KEY ,
              [TblCod] [NVARCHAR](60) COLLATE Chinese_PRC_CI_AS
                                      NOT NULL ,
              [FldCod] [NVARCHAR](60) COLLATE Chinese_PRC_CI_AS
                                      NOT NULL ,
              [DmGrp] [NVARCHAR](20) COLLATE Chinese_PRC_CI_AS
                                     NOT NULL ,
              [FldCpt] [NVARCHAR](60) COLLATE Chinese_PRC_CI_AS
                                      NOT NULL ,
              [FieldDsc] [NVARCHAR](80) COLLATE Chinese_PRC_CI_AS
                                        NOT NULL
            ); 
    END;
   
   