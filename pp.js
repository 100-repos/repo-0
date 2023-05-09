{
  "engine": {
    "name": "@guardrails/guardrails-engine-php-phpcs-security-audit",
    "version": "1.0.7"
  },
  "language": "php",
  "status": "success",
  "executionTime": 7305,
  "issues": 702,
  "process": {
    "name": "phpcs-security-audit",
    "version": "3.6.0"
  },
  "output": [
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/SN_full.php",
        "positions": {
          "begin": {
            "line": 6
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $filename on include",
        "severity": "5",
        "lineContent": "include $filename . %22.php%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.NoEvals.NoEvals",
      "location": {
        "path": "DVWA/SN_full.php",
        "positions": {
          "begin": {
            "line": 14
          }
        }
      },
      "metadata": {
        "description": "Please do not use eval() functions",
        "severity": "5",
        "lineContent": "eval(%22echo \\$data;%22);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/SN_full.php",
        "positions": {
          "begin": {
            "line": 35
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with %22Welcome $name%22 on echo",
        "severity": "5",
        "lineContent": "echo %22Welcome $name%22; // Noncompliant"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/SN_full.php",
        "positions": {
          "begin": {
            "line": 59
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = mysqli_query($con, $query);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/SN_full.php",
        "positions": {
          "begin": {
            "line": 92
          }
        }
      },
      "metadata": {
        "description": "Filesystem function unlink() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "unlink(%22/storage/%22 . $userId . %22/%22 . $fileUUID); // Noncompliant"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.SystemExecFunctions.WarnSystemExec",
      "location": {
        "path": "DVWA/SN_full.php",
        "positions": {
          "begin": {
            "line": 105
          }
        }
      },
      "metadata": {
        "description": "System program execution function exec() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "exec( $binary ); // Noncompliant"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/SN_full.php",
        "positions": {
          "begin": {
            "line": 147
          }
        }
      },
      "metadata": {
        "description": "Crypto function hash_pbkdf2 used.",
        "severity": "5",
        "lineContent": "$hash = hash_pbkdf2(%27sha256%27, $password, $email, 100000); // Noncompliant; salt (3rd argument) is predictable because initialized with the provided $email"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/SN_full.php",
        "positions": {
          "begin": {
            "line": 149
          }
        }
      },
      "metadata": {
        "description": "Crypto function hash_pbkdf2 used.",
        "severity": "5",
        "lineContent": "$hash = hash_pbkdf2(%27sha256%27, $password, %27%27, 100000); // Noncompliant; salt is empty"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/SN_full.php",
        "positions": {
          "begin": {
            "line": 151
          }
        }
      },
      "metadata": {
        "description": "Crypto function hash_pbkdf2 used.",
        "severity": "5",
        "lineContent": "$hash = hash_pbkdf2(%27sha256%27, $password, %27D8VxSmTZt2E2YV454mkqAY5e%27, 100000); // Noncompliant; salt is hardcoded"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/SN_full.php",
        "positions": {
          "begin": {
            "line": 153
          }
        }
      },
      "metadata": {
        "description": "Crypto function crypt used.",
        "severity": "5",
        "lineContent": "$hash = crypt($password); // Noncompliant; salt is not provided; fails in PHP 8"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/SN_full.php",
        "positions": {
          "begin": {
            "line": 154
          }
        }
      },
      "metadata": {
        "description": "Crypto function crypt used.",
        "severity": "5",
        "lineContent": "$hash = crypt($password, %22%22); // Noncompliant; salt is hardcoded; fails in PHP 8"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/SN_full.php",
        "positions": {
          "begin": {
            "line": 158
          }
        }
      },
      "metadata": {
        "description": "Crypto function mcrypt_create_iv used.",
        "severity": "5",
        "lineContent": "%27salt%27 => mcrypt_create_iv(22, MCRYPT_DEV_URANDOM), // Noncompliant ; use salt generated by default"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/SN_full.php",
        "positions": {
          "begin": {
            "line": 160
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with password_hash on echo",
        "severity": "5",
        "lineContent": "echo password_hash(%22rasmuslerdorf%22, PASSWORD_BCRYPT, $options);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/SN_full.php",
        "positions": {
          "begin": {
            "line": 160
          }
        }
      },
      "metadata": {
        "description": "Crypto function password_hash used.",
        "severity": "5",
        "lineContent": "echo password_hash(%22rasmuslerdorf%22, PASSWORD_BCRYPT, $options);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/about.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/dvwa/includes/DBMS/MySQL.php",
        "positions": {
          "begin": {
            "line": 22
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "if( !@mysqli_query($GLOBALS[%22___mysqli_ston%22],  $drop_db ) ) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/dvwa/includes/DBMS/MySQL.php",
        "positions": {
          "begin": {
            "line": 28
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "if( !@mysqli_query($GLOBALS[%22___mysqli_ston%22],  $create_db ) ) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/dvwa/includes/DBMS/MySQL.php",
        "positions": {
          "begin": {
            "line": 36
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "if( !@((bool)mysqli_query($GLOBALS[%22___mysqli_ston%22], %22USE %22 . $_DVWA[ %27db_database%27 ])) ) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/dvwa/includes/DBMS/MySQL.php",
        "positions": {
          "begin": {
            "line": 42
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "if( !mysqli_query($GLOBALS[%22___mysqli_ston%22],  $create_tb ) ) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/dvwa/includes/DBMS/MySQL.php",
        "positions": {
          "begin": {
            "line": 58
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "if( !mysqli_query($GLOBALS[%22___mysqli_ston%22],  $insert ) ) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/dvwa/includes/DBMS/MySQL.php",
        "positions": {
          "begin": {
            "line": 67
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "if( !mysqli_query($GLOBALS[%22___mysqli_ston%22],  $create_tb_guestbook ) ) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/dvwa/includes/DBMS/MySQL.php",
        "positions": {
          "begin": {
            "line": 76
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "if( !mysqli_query($GLOBALS[%22___mysqli_ston%22],  $insert ) ) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/dvwa/includes/DBMS/MySQL.php",
        "positions": {
          "begin": {
            "line": 88
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_exists() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (file_exists($conf)) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/dvwa/includes/DBMS/MySQL.php",
        "positions": {
          "begin": {
            "line": 90
          }
        }
      },
      "metadata": {
        "description": "Filesystem function copy() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "@copy($conf, $bakconf);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/dvwa/includes/dvwaPage.inc.php",
        "positions": {
          "begin": {
            "line": 10
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_exists() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (!file_exists(DVWA_WEB_PAGE_TO_ROOT . %27config/config.inc.php%27)) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/dvwa/includes/dvwaPage.inc.php",
        "positions": {
          "begin": {
            "line": 15
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27config/config.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/dvwa/includes/dvwaPage.inc.php",
        "positions": {
          "begin": {
            "line": 280
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with %22\\n on echo",
        "severity": "5",
        "lineContent": "echo %22"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/dvwa/includes/dvwaPage.inc.php",
        "positions": {
          "begin": {
            "line": 351
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with %22\\n on echo",
        "severity": "5",
        "lineContent": "echo %22"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/dvwa/includes/dvwaPage.inc.php",
        "positions": {
          "begin": {
            "line": 388
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with %22\\n on echo",
        "severity": "5",
        "lineContent": "echo %22"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/dvwa/includes/dvwaPage.inc.php",
        "positions": {
          "begin": {
            "line": 471
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "|| !@((bool)mysqli_query($GLOBALS[%22___mysqli_ston%22], %22USE %22 . $_DVWA[ %27db_database%27 ])) ) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/dvwa/includes/dvwaPage.inc.php",
        "positions": {
          "begin": {
            "line": 489
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with %22Unknown {$DBMS} selected.%22 on die",
        "severity": "5",
        "lineContent": "die ( %22Unknown {$DBMS} selected.%22 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/dvwa/includes/dvwaPage.inc.php",
        "positions": {
          "begin": {
            "line": 505
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $query );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/dvwa/includes/dvwaPage.inc.php",
        "positions": {
          "begin": {
            "line": 538
          }
        }
      },
      "metadata": {
        "description": "Crypto function md5 used.",
        "severity": "5",
        "lineContent": "$_SESSION[ %27session_token%27 ] = md5( uniqid() );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/dvwa/includes/dvwaPage.inc.php",
        "positions": {
          "begin": {
            "line": 552
          }
        }
      },
      "metadata": {
        "description": "Filesystem function realpath() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$PHPUploadPath    = realpath( getcwd() . DIRECTORY_SEPARATOR . DVWA_WEB_PAGE_TO_ROOT . %22hackable%22 . DIRECTORY_SEPARATOR . %22uploads%22 ) . DIRECTORY_SEPARATOR;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/dvwa/includes/dvwaPage.inc.php",
        "positions": {
          "begin": {
            "line": 553
          }
        }
      },
      "metadata": {
        "description": "Filesystem function realpath() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$PHPIDSPath       = realpath( getcwd() . DIRECTORY_SEPARATOR . DVWA_WEB_PAGE_TO_ROOT . %22external%22 . DIRECTORY_SEPARATOR . %22phpids%22 . DIRECTORY_SEPARATOR . dvwaPhpIdsVersionGet() . DIRECTORY_SEPARATOR . %22lib%22 . DIRECTORY_SEPARATOR . %22IDS%22 . DIRECTORY_SEPARATOR . %22tmp%22 . DIRECTORY_SEPARATOR . %22phpids_log.txt%22 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/dvwa/includes/dvwaPage.inc.php",
        "positions": {
          "begin": {
            "line": 554
          }
        }
      },
      "metadata": {
        "description": "Filesystem function realpath() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$PHPCONFIGPath       = realpath( getcwd() . DIRECTORY_SEPARATOR . DVWA_WEB_PAGE_TO_ROOT . %22config%22);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/dvwa/includes/dvwaPage.inc.php",
        "positions": {
          "begin": {
            "line": 567
          }
        }
      },
      "metadata": {
        "description": "Filesystem function is_writable() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$DVWAUploadsWrite = %27[User: %27 . get_current_user() . %27] Writable folder %27 . $PHPUploadPath . %27: <span class=%22%27 . ( is_writable( $PHPUploadPath ) ? %27success%22>Yes%27 : %27failure%22>No%27 ) . %27</span>%27;                                     // File Upload"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/dvwa/includes/dvwaPage.inc.php",
        "positions": {
          "begin": {
            "line": 568
          }
        }
      },
      "metadata": {
        "description": "Filesystem function is_writable() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$bakWritable = %27[User: %27 . get_current_user() . %27] Writable folder %27 . $PHPCONFIGPath . %27: <span class=%22%27 . ( is_writable( $PHPCONFIGPath ) ? %27success%22>Yes%27 : %27failure%22>No%27 ) . %27</span>%27;   // config.php.bak check                                  // File Upload"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/dvwa/includes/dvwaPage.inc.php",
        "positions": {
          "begin": {
            "line": 569
          }
        }
      },
      "metadata": {
        "description": "Filesystem function is_writable() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$DVWAPHPWrite     = %27[User: %27 . get_current_user() . %27] Writable file %27 . $PHPIDSPath . %27: <span class=%22%27 . ( is_writable( $PHPIDSPath ) ? %27success%22>Yes%27 : %27failure%22>No%27 ) . %27</span>%27;                                              // PHPIDS"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/dvwa/includes/dvwaPhpIds.inc.php",
        "positions": {
          "begin": {
            "line": 22
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$file_array = file( DVWA_WEB_PAGE_TO_PHPIDS_LOG );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/dvwa/includes/dvwaPhpIds.inc.php",
        "positions": {
          "begin": {
            "line": 44
          }
        }
      },
      "metadata": {
        "description": "Filesystem function fopen() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$fp = fopen( DVWA_WEB_PAGE_TO_PHPIDS_LOG, w );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/dvwa/includes/dvwaPhpIds.inc.php",
        "positions": {
          "begin": {
            "line": 45
          }
        }
      },
      "metadata": {
        "description": "Filesystem function fclose() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "fclose( $fp );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/dvwa/includes/dvwaPhpIds.inc.php",
        "positions": {
          "begin": {
            "line": 90
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with $result on echo",
        "severity": "5",
        "lineContent": "echo $result;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/docs/examples/example.php",
        "positions": {
          "begin": {
            "line": 48
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$init = IDS_Init::init(dirname(__FILE__) . %27/../../lib/IDS/Config/Config.ini%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/docs/examples/example.php",
        "positions": {
          "begin": {
            "line": 63
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$init->config[%27General%27][%27base_path%27] = dirname(__FILE__) . %27/../../lib/IDS/%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/external/phpids/0.6/docs/examples/example.php",
        "positions": {
          "begin": {
            "line": 82
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with $result on echo",
        "severity": "5",
        "lineContent": "echo $result;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Caching/Database.php",
        "positions": {
          "begin": {
            "line": 196
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on die",
        "severity": "5",
        "lineContent": "die(%27PDOException: %27 . $e->getMessage());"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Caching/Database.php",
        "positions": {
          "begin": {
            "line": 230
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on die",
        "severity": "5",
        "lineContent": "die(%27PDOException: %27 . $e->getMessage());"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Caching/Database.php",
        "positions": {
          "begin": {
            "line": 275
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on die",
        "severity": "5",
        "lineContent": "die(%27PDOException: %27 . $e->getMessage());"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Caching/Factory.php",
        "positions": {
          "begin": {
            "line": 72
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$path    = dirname(__FILE__) . DIRECTORY_SEPARATOR ."
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Caching/Factory.php",
        "positions": {
          "begin": {
            "line": 75
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_exists() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (file_exists($path)) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.Misc.IncludeMismatch.ErrMiscIncludeMismatchNoExt",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Caching/Factory.php",
        "positions": {
          "begin": {
            "line": 76
          }
        }
      },
      "metadata": {
        "description": "No file extension has been found in a include/require function. This implies that some PHP code is not scanned by PHPCS.",
        "severity": "5",
        "lineContent": "include_once $path;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Caching/Factory.php",
        "positions": {
          "begin": {
            "line": 76
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $path on include_once",
        "severity": "5",
        "lineContent": "include_once $path;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CallbackFunctions.WarnCallbackFunctions",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Caching/Factory.php",
        "positions": {
          "begin": {
            "line": 79
          }
        }
      },
      "metadata": {
        "description": "Function call_user_func() that supports callback detected",
        "severity": "5",
        "lineContent": "$object = call_user_func(array($class, %27getInstance%27),"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FunctionHandlingFunctions.WarnFunctionHandling",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Caching/Factory.php",
        "positions": {
          "begin": {
            "line": 79
          }
        }
      },
      "metadata": {
        "description": "Function handling function call_user_func() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$object = call_user_func(array($class, %27getInstance%27),"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Caching/File.php",
        "positions": {
          "begin": {
            "line": 98
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_exists() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (file_exists($this->path) && !is_writable($this->path)) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Caching/File.php",
        "positions": {
          "begin": {
            "line": 98
          }
        }
      },
      "metadata": {
        "description": "Filesystem function is_writable() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (file_exists($this->path) && !is_writable($this->path)) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Caching/File.php",
        "positions": {
          "begin": {
            "line": 133
          }
        }
      },
      "metadata": {
        "description": "Filesystem function is_writable() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (!is_writable(preg_replace(%27/[\\/][^\\/]+\\.[^\\/]++$/%27, null,"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Caching/File.php",
        "positions": {
          "begin": {
            "line": 140
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_exists() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if ((!file_exists($this->path) || (time()-filectime($this->path)) >"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Caching/File.php",
        "positions": {
          "begin": {
            "line": 140
          }
        }
      },
      "metadata": {
        "description": "Filesystem function filectime() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if ((!file_exists($this->path) || (time()-filectime($this->path)) >"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Caching/File.php",
        "positions": {
          "begin": {
            "line": 142
          }
        }
      },
      "metadata": {
        "description": "Filesystem function fopen() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$handle = @fopen($this->path, %27w+%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Caching/File.php",
        "positions": {
          "begin": {
            "line": 148
          }
        }
      },
      "metadata": {
        "description": "Filesystem function fwrite() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "fwrite($handle, serialize($data));"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Caching/File.php",
        "positions": {
          "begin": {
            "line": 149
          }
        }
      },
      "metadata": {
        "description": "Filesystem function fclose() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "fclose($handle);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Caching/File.php",
        "positions": {
          "begin": {
            "line": 167
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_exists() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (file_exists($this->path) && (time()-filectime($this->path)) <"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Caching/File.php",
        "positions": {
          "begin": {
            "line": 167
          }
        }
      },
      "metadata": {
        "description": "Filesystem function filectime() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (file_exists($this->path) && (time()-filectime($this->path)) <"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Caching/File.php",
        "positions": {
          "begin": {
            "line": 169
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_get_contents() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$data = unserialize(file_get_contents($this->path));"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Caching/Memcached.php",
        "positions": {
          "begin": {
            "line": 116
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_exists() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (file_exists($this->path) && !is_writable($this->path)) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Caching/Memcached.php",
        "positions": {
          "begin": {
            "line": 116
          }
        }
      },
      "metadata": {
        "description": "Filesystem function is_writable() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (file_exists($this->path) && !is_writable($this->path)) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Caching/Memcached.php",
        "positions": {
          "begin": {
            "line": 152
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_exists() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (!file_exists($this->path)) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Caching/Memcached.php",
        "positions": {
          "begin": {
            "line": 153
          }
        }
      },
      "metadata": {
        "description": "Filesystem function fopen() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$handle = fopen($this->path, %27w%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Caching/Memcached.php",
        "positions": {
          "begin": {
            "line": 154
          }
        }
      },
      "metadata": {
        "description": "Filesystem function fclose() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "fclose($handle);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Caching/Memcached.php",
        "positions": {
          "begin": {
            "line": 157
          }
        }
      },
      "metadata": {
        "description": "Filesystem function is_writable() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (!is_writable($this->path)) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.PregReplace.PregReplaceDyn",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Converter.php",
        "positions": {
          "begin": {
            "line": 98
          }
        }
      },
      "metadata": {
        "description": "Dynamic usage of preg_replace, please check manually for /e modifier or user input.",
        "severity": "5",
        "lineContent": "$converted = preg_replace($pattern, %27;%27, $value);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.PregReplace.PregReplaceDyn",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Converter.php",
        "positions": {
          "begin": {
            "line": 307
          }
        }
      },
      "metadata": {
        "description": "Dynamic usage of preg_replace, please check manually for /e modifier or user input.",
        "severity": "5",
        "lineContent": "$value   = preg_replace($pattern, %27%22=0%27, $value);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.PregReplace.PregReplaceDyn",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Converter.php",
        "positions": {
          "begin": {
            "line": 317
          }
        }
      },
      "metadata": {
        "description": "Dynamic usage of preg_replace, please check manually for /e modifier or user input.",
        "severity": "5",
        "lineContent": "$value   = preg_replace($pattern, 0, $value);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.PregReplace.PregReplaceDyn",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Converter.php",
        "positions": {
          "begin": {
            "line": 322
          }
        }
      },
      "metadata": {
        "description": "Dynamic usage of preg_replace, please check manually for /e modifier or user input.",
        "severity": "5",
        "lineContent": "$value   = preg_replace($pattern, %27!%27, $value);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Converter.php",
        "positions": {
          "begin": {
            "line": 384
          }
        }
      },
      "metadata": {
        "description": "Crypto function base64_decode used.",
        "severity": "5",
        "lineContent": "$value = str_replace($item, base64_decode($item), $value);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.PregReplace.PregReplaceDyn",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Converter.php",
        "positions": {
          "begin": {
            "line": 551
          }
        }
      },
      "metadata": {
        "description": "Dynamic usage of preg_replace, please check manually for /e modifier or user input.",
        "severity": "5",
        "lineContent": "$converted = preg_replace($pattern, null, $compare);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Filter/Storage.php",
        "positions": {
          "begin": {
            "line": 204
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_exists() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (file_exists($this->source)) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Filter/Storage.php",
        "positions": {
          "begin": {
            "line": 304
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_exists() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (file_exists($this->source)) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Filter/Storage.php",
        "positions": {
          "begin": {
            "line": 305
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_get_contents() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$filters = json_decode(file_get_contents($this->source));"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Init.php",
        "positions": {
          "begin": {
            "line": 92
          }
        }
      },
      "metadata": {
        "description": "Filesystem function parse_ini_file() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$this->config = parse_ini_file($this->configPath, true);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Init.php",
        "positions": {
          "begin": {
            "line": 134
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_exists() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (file_exists($path)) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Log/Database.php",
        "positions": {
          "begin": {
            "line": 198
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on die",
        "severity": "5",
        "lineContent": "die(%27PDOException: %27 . $e->getMessage());"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Log/Email.php",
        "positions": {
          "begin": {
            "line": 219
          }
        }
      },
      "metadata": {
        "description": "Filesystem function scandir() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$files          = scandir($dir);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Log/Email.php",
        "positions": {
          "begin": {
            "line": 221
          }
        }
      },
      "metadata": {
        "description": "Filesystem function is_file() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (is_file($dir . $file)) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Log/Email.php",
        "positions": {
          "begin": {
            "line": 223
          }
        }
      },
      "metadata": {
        "description": "Filesystem function filemtime() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$lastModified = filemtime($dir . $file);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Log/Email.php",
        "positions": {
          "begin": {
            "line": 227
          }
        }
      },
      "metadata": {
        "description": "Filesystem function unlink() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "unlink($dir . $file);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Log/Email.php",
        "positions": {
          "begin": {
            "line": 238
          }
        }
      },
      "metadata": {
        "description": "Crypto function md5 used.",
        "severity": "5",
        "lineContent": "$filename   = $this->file_prefix . md5($remoteAddr.$userAgent) . %27.tmp%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Log/Email.php",
        "positions": {
          "begin": {
            "line": 241
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_exists() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (!file_exists($file)) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Log/Email.php",
        "positions": {
          "begin": {
            "line": 242
          }
        }
      },
      "metadata": {
        "description": "Filesystem function fopen() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$handle = fopen($file, %27w%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Log/Email.php",
        "positions": {
          "begin": {
            "line": 243
          }
        }
      },
      "metadata": {
        "description": "Filesystem function fwrite() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "fwrite($handle, time());"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Log/Email.php",
        "positions": {
          "begin": {
            "line": 244
          }
        }
      },
      "metadata": {
        "description": "Filesystem function fclose() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "fclose($handle);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Log/Email.php",
        "positions": {
          "begin": {
            "line": 249
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_get_contents() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$lastAttack = file_get_contents($file);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Log/Email.php",
        "positions": {
          "begin": {
            "line": 252
          }
        }
      },
      "metadata": {
        "description": "Filesystem function unlink() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "unlink($file);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Log/File.php",
        "positions": {
          "begin": {
            "line": 189
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_exists() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (file_exists($this->logfile)) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Log/File.php",
        "positions": {
          "begin": {
            "line": 193
          }
        }
      },
      "metadata": {
        "description": "Filesystem function is_writable() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (is_writable($this->logfile)) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Log/File.php",
        "positions": {
          "begin": {
            "line": 195
          }
        }
      },
      "metadata": {
        "description": "Filesystem function fopen() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$handle = fopen($this->logfile, %27a%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Log/File.php",
        "positions": {
          "begin": {
            "line": 196
          }
        }
      },
      "metadata": {
        "description": "Filesystem function fwrite() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "fwrite($handle, trim($data) . %22\\n%22);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Log/File.php",
        "positions": {
          "begin": {
            "line": 197
          }
        }
      },
      "metadata": {
        "description": "Filesystem function fclose() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "fclose($handle);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Monitor.php",
        "positions": {
          "begin": {
            "line": 214
          }
        }
      },
      "metadata": {
        "description": "Filesystem function is_writeable() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (!is_writeable($init->getBasePath()"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.Misc.IncludeMismatch.ErrMiscIncludeMismatchNoExt",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Monitor.php",
        "positions": {
          "begin": {
            "line": 368
          }
        }
      },
      "metadata": {
        "description": "No file extension has been found in a include/require function. This implies that some PHP code is not scanned by PHPCS.",
        "severity": "5",
        "lineContent": "include_once $this->pathToHTMLPurifier;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Monitor.php",
        "positions": {
          "begin": {
            "line": 368
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $this on include_once",
        "severity": "5",
        "lineContent": "include_once $this->pathToHTMLPurifier;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Monitor.php",
        "positions": {
          "begin": {
            "line": 368
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with -> on include_once",
        "severity": "5",
        "lineContent": "include_once $this->pathToHTMLPurifier;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Monitor.php",
        "positions": {
          "begin": {
            "line": 368
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with pathToHTMLPurifier on include_once",
        "severity": "5",
        "lineContent": "include_once $this->pathToHTMLPurifier;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Monitor.php",
        "positions": {
          "begin": {
            "line": 370
          }
        }
      },
      "metadata": {
        "description": "Filesystem function is_writeable() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (!is_writeable($this->HTMLPurifierCache)) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CallbackFunctions.WarnCallbackFunctions",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Monitor.php",
        "positions": {
          "begin": {
            "line": 488
          }
        }
      },
      "metadata": {
        "description": "Function array_walk_recursive() that supports callback detected",
        "severity": "5",
        "lineContent": "array_walk_recursive($tmp_value, array($this, %27_jsonConcatContents%27));"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CallbackFunctions.WarnCallbackFunctions",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/Monitor.php",
        "positions": {
          "begin": {
            "line": 493
          }
        }
      },
      "metadata": {
        "description": "Function array_walk_recursive() that supports callback detected",
        "severity": "5",
        "lineContent": "array_walk_recursive($tmp_key, array($this, %27_jsonConcatContents%27));"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CallbackFunctions.WarnCallbackFunctions",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/AttrDef/URI/IPv6.php",
        "positions": {
          "begin": {
            "line": 41
          }
        }
      },
      "metadata": {
        "description": "Function array_map() that supports callback detected",
        "severity": "5",
        "lineContent": "$ip = array_map(%27dechex%27, $ip);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/AttrTransform/ImgRequired.php",
        "positions": {
          "begin": {
            "line": 27
          }
        }
      },
      "metadata": {
        "description": "Filesystem function basename() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$attr[%27alt%27] = basename($attr[%27src%27]);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Bootstrap.php",
        "positions": {
          "begin": {
            "line": 5
          }
        }
      },
      "metadata": {
        "description": "Filesystem function realpath() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "define(%27HTMLPURIFIER_PREFIX%27, realpath(dirname(__FILE__) . %27/..%27));"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Bootstrap.php",
        "positions": {
          "begin": {
            "line": 5
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "define(%27HTMLPURIFIER_PREFIX%27, realpath(dirname(__FILE__) . %27/..%27));"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.Misc.IncludeMismatch.ErrMiscIncludeMismatchNoExt",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Bootstrap.php",
        "positions": {
          "begin": {
            "line": 40
          }
        }
      },
      "metadata": {
        "description": "No file extension has been found in a include/require function. This implies that some PHP code is not scanned by PHPCS.",
        "severity": "5",
        "lineContent": "require HTMLPURIFIER_PREFIX . %27/%27 . $file;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Bootstrap.php",
        "positions": {
          "begin": {
            "line": 40
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with HTMLPURIFIER_PREFIX on require",
        "severity": "5",
        "lineContent": "require HTMLPURIFIER_PREFIX . %27/%27 . $file;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Bootstrap.php",
        "positions": {
          "begin": {
            "line": 40
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $file on require",
        "severity": "5",
        "lineContent": "require HTMLPURIFIER_PREFIX . %27/%27 . $file;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Bootstrap.php",
        "positions": {
          "begin": {
            "line": 56
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_exists() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (!file_exists(HTMLPURIFIER_PREFIX . %27/%27 . $file)) return false;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CallbackFunctions.WarnCallbackFunctions",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Bootstrap.php",
        "positions": {
          "begin": {
            "line": 66
          }
        }
      },
      "metadata": {
        "description": "Function spl_autoload_register() that supports callback detected",
        "severity": "5",
        "lineContent": "spl_autoload_register($autoload);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CallbackFunctions.WarnCallbackFunctions",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Bootstrap.php",
        "positions": {
          "begin": {
            "line": 91
          }
        }
      },
      "metadata": {
        "description": "Function spl_autoload_register() that supports callback detected",
        "severity": "5",
        "lineContent": "spl_autoload_register($autoload);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CallbackFunctions.WarnCallbackFunctions",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Bootstrap.php",
        "positions": {
          "begin": {
            "line": 92
          }
        }
      },
      "metadata": {
        "description": "Function spl_autoload_register() that supports callback detected",
        "severity": "5",
        "lineContent": "foreach ($funcs as $func) spl_autoload_register($func);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.PregReplace.PregReplaceDyn",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/ChildDef/Custom.php",
        "positions": {
          "begin": {
            "line": 50
          }
        }
      },
      "metadata": {
        "description": "Dynamic usage of preg_replace, please check manually for /e modifier or user input.",
        "severity": "5",
        "lineContent": "$reg = preg_replace(%22/$el/%22, %27(,\\\\0)%27, $reg);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Config.php",
        "positions": {
          "begin": {
            "line": 162
          }
        }
      },
      "metadata": {
        "description": "Crypto function md5 used.",
        "severity": "5",
        "lineContent": "$this->serials[$namespace] = md5(serialize($batch));"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Config.php",
        "positions": {
          "begin": {
            "line": 173
          }
        }
      },
      "metadata": {
        "description": "Crypto function md5 used.",
        "severity": "5",
        "lineContent": "$this->serial = md5(serialize($this->getAll()));"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Config.php",
        "positions": {
          "begin": {
            "line": 459
          }
        }
      },
      "metadata": {
        "description": "Filesystem function parse_ini_file() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$array = parse_ini_file($filename, true);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/ConfigSchema/InterchangeBuilder.php",
        "positions": {
          "begin": {
            "line": 21
          }
        }
      },
      "metadata": {
        "description": "Filesystem function parse_ini_file() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$info = parse_ini_file($dir . %27info.ini%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/ConfigSchema/InterchangeBuilder.php",
        "positions": {
          "begin": {
            "line": 25
          }
        }
      },
      "metadata": {
        "description": "Filesystem function opendir() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$dh = opendir($dir);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.NoEvals.NoEvals",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/ConfigSchema/InterchangeBuilder.php",
        "positions": {
          "begin": {
            "line": 140
          }
        }
      },
      "metadata": {
        "description": "Please do not use eval() functions",
        "severity": "5",
        "lineContent": "return eval(%27return array(%27. $contents .%27);%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/ConfigSchema.php",
        "positions": {
          "begin": {
            "line": 54
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_get_contents() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "return unserialize(file_get_contents(HTMLPURIFIER_PREFIX . %27/HTMLPurifier/ConfigSchema/schema.ser%27));"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CallbackFunctions.WarnCallbackFunctions",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/ContentSets.php",
        "positions": {
          "begin": {
            "line": 81
          }
        }
      },
      "metadata": {
        "description": "Function preg_replace_callback() that supports callback detected",
        "severity": "5",
        "lineContent": "$def->content_model = preg_replace_callback("
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/DefinitionCache/Serializer.php",
        "positions": {
          "begin": {
            "line": 10
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_exists() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (file_exists($file)) return false;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/DefinitionCache/Serializer.php",
        "positions": {
          "begin": {
            "line": 25
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_exists() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (!file_exists($file)) return false;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/DefinitionCache/Serializer.php",
        "positions": {
          "begin": {
            "line": 32
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_exists() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (!file_exists($file)) return false;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/DefinitionCache/Serializer.php",
        "positions": {
          "begin": {
            "line": 33
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_get_contents() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "return unserialize(file_get_contents($file));"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/DefinitionCache/Serializer.php",
        "positions": {
          "begin": {
            "line": 38
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_exists() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (!file_exists($file)) return false;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/DefinitionCache/Serializer.php",
        "positions": {
          "begin": {
            "line": 39
          }
        }
      },
      "metadata": {
        "description": "Filesystem function unlink() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "return unlink($file);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/DefinitionCache/Serializer.php",
        "positions": {
          "begin": {
            "line": 45
          }
        }
      },
      "metadata": {
        "description": "Filesystem function opendir() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$dh  = opendir($dir);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/DefinitionCache/Serializer.php",
        "positions": {
          "begin": {
            "line": 49
          }
        }
      },
      "metadata": {
        "description": "Filesystem function unlink() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "unlink($dir . %27/%27 . $filename);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/DefinitionCache/Serializer.php",
        "positions": {
          "begin": {
            "line": 56
          }
        }
      },
      "metadata": {
        "description": "Filesystem function opendir() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$dh  = opendir($dir);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/DefinitionCache/Serializer.php",
        "positions": {
          "begin": {
            "line": 61
          }
        }
      },
      "metadata": {
        "description": "Filesystem function unlink() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if ($this->isOld($key, $config)) unlink($dir . %27/%27 . $filename);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/DefinitionCache/Serializer.php",
        "positions": {
          "begin": {
            "line": 103
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_put_contents() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "return file_put_contents($file, $data);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/DefinitionCache/Serializer.php",
        "positions": {
          "begin": {
            "line": 112
          }
        }
      },
      "metadata": {
        "description": "Filesystem function is_dir() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (!is_dir($directory)) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/DefinitionCache/Serializer.php",
        "positions": {
          "begin": {
            "line": 114
          }
        }
      },
      "metadata": {
        "description": "Filesystem function is_dir() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (!is_dir($base)) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/DefinitionCache/Serializer.php",
        "positions": {
          "begin": {
            "line": 123
          }
        }
      },
      "metadata": {
        "description": "Filesystem function mkdir() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "mkdir($directory);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/DefinitionCache/Serializer.php",
        "positions": {
          "begin": {
            "line": 124
          }
        }
      },
      "metadata": {
        "description": "Filesystem function umask() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "umask($old);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/DefinitionCache/Serializer.php",
        "positions": {
          "begin": {
            "line": 137
          }
        }
      },
      "metadata": {
        "description": "Filesystem function is_writable() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (is_writable($dir)) return true;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/DefinitionCache/Serializer.php",
        "positions": {
          "begin": {
            "line": 138
          }
        }
      },
      "metadata": {
        "description": "Filesystem function is_dir() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (!is_dir($dir)) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/DefinitionCache/Serializer.php",
        "positions": {
          "begin": {
            "line": 147
          }
        }
      },
      "metadata": {
        "description": "Filesystem function fileowner() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (fileowner($dir) === posix_getuid()) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/DefinitionCache/Serializer.php",
        "positions": {
          "begin": {
            "line": 149
          }
        }
      },
      "metadata": {
        "description": "Filesystem function chmod() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "chmod($dir, 0755);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/DefinitionCache/Serializer.php",
        "positions": {
          "begin": {
            "line": 151
          }
        }
      },
      "metadata": {
        "description": "Filesystem function filegroup() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "} elseif (filegroup($dir) === posix_getgid()) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CallbackFunctions.WarnCallbackFunctions",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Encoder.php",
        "positions": {
          "begin": {
            "line": 271
          }
        }
      },
      "metadata": {
        "description": "Function set_error_handler() that supports callback detected",
        "severity": "5",
        "lineContent": "set_error_handler(array(%27HTMLPurifier_Encoder%27, %27muteErrorHandler%27));"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CallbackFunctions.WarnCallbackFunctions",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Encoder.php",
        "positions": {
          "begin": {
            "line": 307
          }
        }
      },
      "metadata": {
        "description": "Function set_error_handler() that supports callback detected",
        "severity": "5",
        "lineContent": "set_error_handler(array(%27HTMLPurifier_Encoder%27, %27muteErrorHandler%27));"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CallbackFunctions.WarnCallbackFunctions",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Encoder.php",
        "positions": {
          "begin": {
            "line": 401
          }
        }
      },
      "metadata": {
        "description": "Function set_error_handler() that supports callback detected",
        "severity": "5",
        "lineContent": "set_error_handler(array(%27HTMLPurifier_Encoder%27, %27muteErrorHandler%27));"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/EntityLookup.php",
        "positions": {
          "begin": {
            "line": 23
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_get_contents() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$this->table = unserialize(file_get_contents($file));"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CallbackFunctions.WarnCallbackFunctions",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/EntityParser.php",
        "positions": {
          "begin": {
            "line": 59
          }
        }
      },
      "metadata": {
        "description": "Function preg_replace_callback() that supports callback detected",
        "severity": "5",
        "lineContent": "return preg_replace_callback("
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CallbackFunctions.WarnCallbackFunctions",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/EntityParser.php",
        "positions": {
          "begin": {
            "line": 110
          }
        }
      },
      "metadata": {
        "description": "Function preg_replace_callback() that supports callback detected",
        "severity": "5",
        "lineContent": "return preg_replace_callback("
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CallbackFunctions.WarnCallbackFunctions",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Filter/ExtractStyleBlocks.php",
        "positions": {
          "begin": {
            "line": 43
          }
        }
      },
      "metadata": {
        "description": "Function preg_replace_callback() that supports callback detected",
        "severity": "5",
        "lineContent": "$html = preg_replace_callback(%27#<style(?:\\s.*)?>(.+)</style>#isU%27, array($this, %27styleCallback%27), $html);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CallbackFunctions.WarnCallbackFunctions",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Filter/ExtractStyleBlocks.php",
        "positions": {
          "begin": {
            "line": 67
          }
        }
      },
      "metadata": {
        "description": "Function array_map() that supports callback detected",
        "severity": "5",
        "lineContent": "$scopes = array_map(%27trim%27, explode(%27,%27, $scope));"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CallbackFunctions.WarnCallbackFunctions",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Filter/ExtractStyleBlocks.php",
        "positions": {
          "begin": {
            "line": 93
          }
        }
      },
      "metadata": {
        "description": "Function array_map() that supports callback detected",
        "severity": "5",
        "lineContent": "$selectors = array_map(%27trim%27, explode(%27,%27, $selector));"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.PregReplace.PregReplaceDyn",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Filter/YouTube.php",
        "positions": {
          "begin": {
            "line": 12
          }
        }
      },
      "metadata": {
        "description": "Dynamic usage of preg_replace, please check manually for /e modifier or user input.",
        "severity": "5",
        "lineContent": "return preg_replace($pre_regex, $pre_replace, $html);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.PregReplace.PregReplaceDyn",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Filter/YouTube.php",
        "positions": {
          "begin": {
            "line": 27
          }
        }
      },
      "metadata": {
        "description": "Dynamic usage of preg_replace, please check manually for /e modifier or user input.",
        "severity": "5",
        "lineContent": "return preg_replace($post_regex, $post_replace, $html);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.PregReplace.PregReplaceWeird",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Generator.php",
        "positions": {
          "begin": {
            "line": 137
          }
        }
      },
      "metadata": {
        "description": "Weird usage of preg_replace, please check manually for /e modifier.",
        "severity": "5",
        "lineContent": "$data = preg_replace(%27#//\\s*$#%27, %27%27, $token->data);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Injector/RemoveEmpty.php",
        "positions": {
          "begin": {
            "line": 35
          }
        }
      },
      "metadata": {
        "description": "Filesystem function rewind() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$this->rewind($b - 1);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Injector.php",
        "positions": {
          "begin": {
            "line": 68
          }
        }
      },
      "metadata": {
        "description": "Filesystem function rewind() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "public function rewind($index) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnWeirdFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Injector.php",
        "positions": {
          "begin": {
            "line": 69
          }
        }
      },
      "metadata": {
        "description": "Filesystem function rewind used but not as a function",
        "severity": "5",
        "lineContent": "$this->rewind = $index;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnWeirdFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Injector.php",
        "positions": {
          "begin": {
            "line": 76
          }
        }
      },
      "metadata": {
        "description": "Filesystem function rewind used but not as a function",
        "severity": "5",
        "lineContent": "$r = $this->rewind;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnWeirdFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Injector.php",
        "positions": {
          "begin": {
            "line": 77
          }
        }
      },
      "metadata": {
        "description": "Filesystem function rewind used but not as a function",
        "severity": "5",
        "lineContent": "$this->rewind = false;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnWeirdFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/LanguageFactory.php",
        "positions": {
          "begin": {
            "line": 74
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dir used but not as a function",
        "severity": "5",
        "lineContent": "$this->dir = HTMLPURIFIER_PREFIX . %27/HTMLPurifier%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnWeirdFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/LanguageFactory.php",
        "positions": {
          "begin": {
            "line": 102
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dir used but not as a function",
        "severity": "5",
        "lineContent": "$file  = $this->dir . %27/Language/classes/%27 . $code . %27.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/LanguageFactory.php",
        "positions": {
          "begin": {
            "line": 103
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_exists() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (file_exists($file) || class_exists($class, false)) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnWeirdFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/LanguageFactory.php",
        "positions": {
          "begin": {
            "line": 145
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dir used but not as a function",
        "severity": "5",
        "lineContent": "$filename = $this->dir . %27/Language/messages/%27 . $code . %27.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/LanguageFactory.php",
        "positions": {
          "begin": {
            "line": 151
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_exists() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (!file_exists($filename)) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnWeirdFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/LanguageFactory.php",
        "positions": {
          "begin": {
            "line": 153
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dir used but not as a function",
        "severity": "5",
        "lineContent": "$filename = $this->dir . %27/Language/messages/en.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.Misc.IncludeMismatch.ErrMiscIncludeMismatchNoExt",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/LanguageFactory.php",
        "positions": {
          "begin": {
            "line": 156
          }
        }
      },
      "metadata": {
        "description": "No file extension has been found in a include/require function. This implies that some PHP code is not scanned by PHPCS.",
        "severity": "5",
        "lineContent": "include $filename;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/LanguageFactory.php",
        "positions": {
          "begin": {
            "line": 156
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $filename on include",
        "severity": "5",
        "lineContent": "include $filename;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CallbackFunctions.WarnCallbackFunctions",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Lexer/DOMLex.php",
        "positions": {
          "begin": {
            "line": 47
          }
        }
      },
      "metadata": {
        "description": "Function preg_replace_callback() that supports callback detected",
        "severity": "5",
        "lineContent": "$html = preg_replace_callback($comment, array($this, %27callbackArmorCommentEntities%27), $html);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.PregReplace.PregReplaceDyn",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Lexer/DOMLex.php",
        "positions": {
          "begin": {
            "line": 50
          }
        }
      },
      "metadata": {
        "description": "Dynamic usage of preg_replace, please check manually for /e modifier or user input.",
        "severity": "5",
        "lineContent": "$html = preg_replace(%22/<($char)/i%22, %27&lt;\\\\1%27, $html);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CallbackFunctions.WarnCallbackFunctions",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Lexer/DOMLex.php",
        "positions": {
          "begin": {
            "line": 52
          }
        }
      },
      "metadata": {
        "description": "Function preg_replace_callback() that supports callback detected",
        "severity": "5",
        "lineContent": "$html = preg_replace_callback($comment, array($this, %27callbackUndoCommentSubst%27), $html); // fix comments"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CallbackFunctions.WarnCallbackFunctions",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Lexer/DOMLex.php",
        "positions": {
          "begin": {
            "line": 61
          }
        }
      },
      "metadata": {
        "description": "Function set_error_handler() that supports callback detected",
        "severity": "5",
        "lineContent": "set_error_handler(array($this, %27muteErrorHandler%27));"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CallbackFunctions.WarnCallbackFunctions",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Lexer/DirectLex.php",
        "positions": {
          "begin": {
            "line": 37
          }
        }
      },
      "metadata": {
        "description": "Function preg_replace_callback() that supports callback detected",
        "severity": "5",
        "lineContent": "$html = preg_replace_callback(%27#(<script[^>]*>)(\\s*[^<].+?)(</script>)#si%27,"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.PregReplace.PregReplaceWeird",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Lexer/PH5P.php",
        "positions": {
          "begin": {
            "line": 165
          }
        }
      },
      "metadata": {
        "description": "Weird usage of preg_replace, please check manually for /e modifier.",
        "severity": "5",
        "lineContent": "return preg_replace(%27#^([%27.$char_class.%27]+).*#s%27, %27\\\\1%27, substr($this->data, $start));"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CallbackFunctions.WarnCallbackFunctions",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Lexer.php",
        "positions": {
          "begin": {
            "line": 215
          }
        }
      },
      "metadata": {
        "description": "Function preg_replace_callback() that supports callback detected",
        "severity": "5",
        "lineContent": "return preg_replace_callback("
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CallbackFunctions.WarnCallbackFunctions",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Lexer.php",
        "positions": {
          "begin": {
            "line": 226
          }
        }
      },
      "metadata": {
        "description": "Function preg_replace_callback() that supports callback detected",
        "severity": "5",
        "lineContent": "return preg_replace_callback("
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Printer/ConfigForm.php",
        "positions": {
          "begin": {
            "line": 62
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_get_contents() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "return file_get_contents(HTMLPURIFIER_PREFIX . %27/HTMLPurifier/Printer/ConfigForm.css%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Printer/ConfigForm.php",
        "positions": {
          "begin": {
            "line": 69
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_get_contents() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "return file_get_contents(HTMLPURIFIER_PREFIX . %27/HTMLPurifier/Printer/ConfigForm.js%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnWeirdFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Strategy/MakeWellFormed.php",
        "positions": {
          "begin": {
            "line": 132
          }
        }
      },
      "metadata": {
        "description": "Filesystem function rewind used but not as a function",
        "severity": "5",
        "lineContent": "$prev->rewind = $i;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnWeirdFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Strategy/MakeWellFormed.php",
        "positions": {
          "begin": {
            "line": 174
          }
        }
      },
      "metadata": {
        "description": "Filesystem function rewind used but not as a function",
        "severity": "5",
        "lineContent": "if ($token->rewind !== null && $token->rewind !== $i) continue;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnWeirdFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Strategy/MakeWellFormed.php",
        "positions": {
          "begin": {
            "line": 174
          }
        }
      },
      "metadata": {
        "description": "Filesystem function rewind used but not as a function",
        "severity": "5",
        "lineContent": "if ($token->rewind !== null && $token->rewind !== $i) continue;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnWeirdFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Strategy/MakeWellFormed.php",
        "positions": {
          "begin": {
            "line": 240
          }
        }
      },
      "metadata": {
        "description": "Filesystem function rewind used but not as a function",
        "severity": "5",
        "lineContent": "if ($token->rewind !== null && $token->rewind !== $i) continue;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnWeirdFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Strategy/MakeWellFormed.php",
        "positions": {
          "begin": {
            "line": 240
          }
        }
      },
      "metadata": {
        "description": "Filesystem function rewind used but not as a function",
        "severity": "5",
        "lineContent": "if ($token->rewind !== null && $token->rewind !== $i) continue;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnWeirdFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Strategy/MakeWellFormed.php",
        "positions": {
          "begin": {
            "line": 287
          }
        }
      },
      "metadata": {
        "description": "Filesystem function rewind used but not as a function",
        "severity": "5",
        "lineContent": "if ($token->rewind !== null && $token->rewind !== $i) continue;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnWeirdFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/Strategy/MakeWellFormed.php",
        "positions": {
          "begin": {
            "line": 287
          }
        }
      },
      "metadata": {
        "description": "Filesystem function rewind used but not as a function",
        "severity": "5",
        "lineContent": "if ($token->rewind !== null && $token->rewind !== $i) continue;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/StringHashParser.php",
        "positions": {
          "begin": {
            "line": 37
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_exists() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (!file_exists($file)) return false;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/StringHashParser.php",
        "positions": {
          "begin": {
            "line": 38
          }
        }
      },
      "metadata": {
        "description": "Filesystem function fopen() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$fh = fopen($file, %27r%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/StringHashParser.php",
        "positions": {
          "begin": {
            "line": 41
          }
        }
      },
      "metadata": {
        "description": "Filesystem function fclose() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "fclose($fh);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/StringHashParser.php",
        "positions": {
          "begin": {
            "line": 49
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_exists() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (!file_exists($file)) return false;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/StringHashParser.php",
        "positions": {
          "begin": {
            "line": 51
          }
        }
      },
      "metadata": {
        "description": "Filesystem function fopen() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$fh = fopen($file, %27r%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/StringHashParser.php",
        "positions": {
          "begin": {
            "line": 53
          }
        }
      },
      "metadata": {
        "description": "Filesystem function feof() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "while (!feof($fh)) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/StringHashParser.php",
        "positions": {
          "begin": {
            "line": 56
          }
        }
      },
      "metadata": {
        "description": "Filesystem function fclose() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "fclose($fh);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/StringHashParser.php",
        "positions": {
          "begin": {
            "line": 73
          }
        }
      },
      "metadata": {
        "description": "Filesystem function fgets() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$line = fgets($fh);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/StringHashParser.php",
        "positions": {
          "begin": {
            "line": 100
          }
        }
      },
      "metadata": {
        "description": "Filesystem function feof() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "} while (!feof($fh));"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CallbackFunctions.WarnCallbackFunctions",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/URIFilter/Munge.php",
        "positions": {
          "begin": {
            "line": 28
          }
        }
      },
      "metadata": {
        "description": "Function array_map() that supports callback detected",
        "severity": "5",
        "lineContent": "$this->replace = array_map(%27rawurlencode%27, $this->replace);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/URIFilter/Munge.php",
        "positions": {
          "begin": {
            "line": 49
          }
        }
      },
      "metadata": {
        "description": "Crypto function sha1 used.",
        "severity": "5",
        "lineContent": "if ($this->secretKey) $this->replace[%27%t%27] = sha1($this->secretKey . %27:%27 . $string);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.NoEvals.NoEvals",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier/VarParser/Native.php",
        "positions": {
          "begin": {
            "line": 17
          }
        }
      },
      "metadata": {
        "description": "Please do not use eval() functions",
        "severity": "5",
        "lineContent": "$result = eval(%22\\$var = $expr;%22);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.auto.php",
        "positions": {
          "begin": {
            "line": 7
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "set_include_path(dirname(__FILE__) . PATH_SEPARATOR . get_include_path() );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.kses.php",
        "positions": {
          "begin": {
            "line": 8
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with dirname on require_once",
        "severity": "5",
        "lineContent": "require_once dirname(__FILE__) . %27/HTMLPurifier.auto.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.kses.php",
        "positions": {
          "begin": {
            "line": 8
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "require_once dirname(__FILE__) . %27/HTMLPurifier.auto.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.kses.php",
        "positions": {
          "begin": {
            "line": 8
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with __FILE__ on require_once",
        "severity": "5",
        "lineContent": "require_once dirname(__FILE__) . %27/HTMLPurifier.auto.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.path.php",
        "positions": {
          "begin": {
            "line": 9
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "set_include_path(dirname(__FILE__) . PATH_SEPARATOR . get_include_path() );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 13
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$__dir = dirname(__FILE__);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 15
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 16
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrCollections.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 17
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 18
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrTransform.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 19
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrTypes.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 20
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrValidator.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 21
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Bootstrap.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 22
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Definition.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 23
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/CSSDefinition.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 24
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/ChildDef.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 25
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Config.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 26
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/ConfigSchema.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 27
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/ContentSets.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 28
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Context.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 29
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/DefinitionCache.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 30
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/DefinitionCacheFactory.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 31
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Doctype.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 32
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/DoctypeRegistry.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 33
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/ElementDef.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 34
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Encoder.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 35
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/EntityLookup.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 36
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/EntityParser.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 37
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/ErrorCollector.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 38
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/ErrorStruct.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 39
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Exception.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 40
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Filter.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 41
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Generator.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 42
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLDefinition.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 43
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 44
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModuleManager.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 45
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/IDAccumulator.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 46
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Injector.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 47
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Language.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 48
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/LanguageFactory.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 49
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Length.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 50
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Lexer.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 51
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/PercentEncoder.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 52
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Strategy.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 53
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/StringHash.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 54
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/StringHashParser.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 55
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/TagTransform.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 56
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Token.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 57
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/TokenFactory.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 58
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/URI.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 59
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/URIDefinition.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 60
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/URIFilter.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 61
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/URIParser.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 62
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/URIScheme.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 63
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/URISchemeRegistry.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 64
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/UnitConverter.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 65
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/VarParser.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 66
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/VarParserException.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 67
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/CSS.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 68
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/Enum.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 69
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/Integer.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 70
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/Lang.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 71
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/Switch.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 72
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/Text.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 73
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/URI.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 74
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/CSS/Number.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 75
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/CSS/AlphaValue.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 76
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/CSS/Background.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 77
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/CSS/BackgroundPosition.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 78
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/CSS/Border.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 79
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/CSS/Color.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 80
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/CSS/Composite.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 81
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/CSS/DenyElementDecorator.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 82
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/CSS/Filter.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 83
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/CSS/Font.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 84
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/CSS/FontFamily.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 85
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/CSS/ImportantDecorator.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 86
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/CSS/Length.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 87
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/CSS/ListStyle.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 88
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/CSS/Multiple.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 89
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/CSS/Percentage.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 90
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/CSS/TextDecoration.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 91
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/CSS/URI.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 92
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/HTML/Bool.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 93
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/HTML/Color.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 94
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/HTML/FrameTarget.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 95
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/HTML/ID.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 96
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/HTML/Pixels.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 97
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/HTML/Length.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 98
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/HTML/LinkTypes.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 99
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/HTML/MultiLength.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 100
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/HTML/Nmtokens.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 101
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/URI/Email.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 102
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/URI/Host.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 103
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/URI/IPv4.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 104
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/URI/IPv6.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 105
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrDef/URI/Email/SimpleCheck.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 106
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrTransform/Background.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 107
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrTransform/BdoDir.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 108
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrTransform/BgColor.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 109
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrTransform/BoolToCSS.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 110
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrTransform/Border.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 111
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrTransform/EnumToCSS.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 112
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrTransform/ImgRequired.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 113
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrTransform/ImgSpace.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 114
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrTransform/Input.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 115
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrTransform/Lang.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 116
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrTransform/Length.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 117
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrTransform/Name.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 118
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrTransform/SafeEmbed.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 119
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrTransform/SafeObject.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 120
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrTransform/SafeParam.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 121
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrTransform/ScriptRequired.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 122
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/AttrTransform/Textarea.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 123
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/ChildDef/Chameleon.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 124
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/ChildDef/Custom.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 125
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/ChildDef/Empty.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 126
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/ChildDef/Required.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 127
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/ChildDef/Optional.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 128
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/ChildDef/StrictBlockquote.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 129
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/ChildDef/Table.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 130
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/DefinitionCache/Decorator.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 131
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/DefinitionCache/Null.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 132
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/DefinitionCache/Serializer.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 133
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/DefinitionCache/Decorator/Cleanup.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 134
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/DefinitionCache/Decorator/Memory.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 135
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/Bdo.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 136
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/CommonAttributes.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 137
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/Edit.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 138
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/Forms.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 139
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/Hypertext.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 140
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/Image.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 141
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/Legacy.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 142
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/List.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 143
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/Name.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 144
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/NonXMLCommonAttributes.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 145
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/Object.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 146
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/Presentation.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 147
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/Proprietary.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 148
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/Ruby.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 149
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/SafeEmbed.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 150
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/SafeObject.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 151
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/Scripting.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 152
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/StyleAttribute.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 153
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/Tables.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 154
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/Target.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 155
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/Text.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 156
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/Tidy.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 157
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/XMLCommonAttributes.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 158
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/Tidy/Name.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 159
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/Tidy/Proprietary.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 160
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/Tidy/XHTMLAndHTML4.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 161
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/Tidy/Strict.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 162
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/Tidy/Transitional.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 163
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/HTMLModule/Tidy/XHTML.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 164
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Injector/AutoParagraph.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 165
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Injector/DisplayLinkURI.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 166
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Injector/Linkify.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 167
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Injector/PurifierLinkify.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 168
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Injector/RemoveEmpty.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 169
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Injector/SafeObject.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 170
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Lexer/DOMLex.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 171
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Lexer/DirectLex.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 172
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Strategy/Composite.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 173
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Strategy/Core.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 174
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Strategy/FixNesting.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 175
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Strategy/MakeWellFormed.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 176
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Strategy/RemoveForeignElements.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 177
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Strategy/ValidateAttributes.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 178
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/TagTransform/Font.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 179
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/TagTransform/Simple.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 180
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Token/Comment.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 181
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Token/Tag.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 182
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Token/Empty.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 183
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Token/End.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 184
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Token/Start.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 185
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/Token/Text.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 186
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/URIFilter/DisableExternal.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 187
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/URIFilter/DisableExternalResources.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 188
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/URIFilter/HostBlacklist.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 189
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/URIFilter/MakeAbsolute.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 190
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/URIFilter/Munge.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 191
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/URIScheme/ftp.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 192
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/URIScheme/http.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 193
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/URIScheme/https.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 194
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/URIScheme/mailto.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 195
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/URIScheme/news.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 196
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/URIScheme/nntp.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 197
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/VarParser/Flexible.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/external/phpids/0.6/lib/IDS/vendors/htmlpurifier/HTMLPurifier.safe-includes.php",
        "positions": {
          "begin": {
            "line": 198
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $__dir on require_once",
        "severity": "5",
        "lineContent": "require_once $__dir . %27/HTMLPurifier/VarParser/Native.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/IDS/CachingTest.php",
        "positions": {
          "begin": {
            "line": 23
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "set_include_path(get_include_path() . PATH_SEPARATOR . dirname(__FILE__) . %27/../../lib%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/IDS/CachingTest.php",
        "positions": {
          "begin": {
            "line": 30
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$this->path = dirname(__FILE__) . %27/../../lib/IDS/Config/Config.ini%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/IDS/CachingTest.php",
        "positions": {
          "begin": {
            "line": 55
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$this->init->config[%27Caching%27][%27path%27] =  dirname(__FILE__) . %27/../../lib/IDS/tmp/default_filter.cache%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/IDS/CachingTest.php",
        "positions": {
          "begin": {
            "line": 93
          }
        }
      },
      "metadata": {
        "description": "Filesystem function unlink() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "@unlink(dirname(__FILE__) . %27/../../lib/IDS/tmp/default_filter.cache%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/IDS/CachingTest.php",
        "positions": {
          "begin": {
            "line": 93
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "@unlink(dirname(__FILE__) . %27/../../lib/IDS/tmp/default_filter.cache%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/IDS/CachingTest.php",
        "positions": {
          "begin": {
            "line": 94
          }
        }
      },
      "metadata": {
        "description": "Filesystem function unlink() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "@unlink(dirname(__FILE__) . %27/../../lib/IDS/tmp/memcache.timestamp%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/IDS/CachingTest.php",
        "positions": {
          "begin": {
            "line": 94
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "@unlink(dirname(__FILE__) . %27/../../lib/IDS/tmp/memcache.timestamp%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/IDS/EventTest.php",
        "positions": {
          "begin": {
            "line": 23
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "set_include_path(get_include_path() . PATH_SEPARATOR . dirname(__FILE__) . %27/../../lib%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/IDS/ExceptionTest.php",
        "positions": {
          "begin": {
            "line": 23
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "set_include_path(get_include_path() . PATH_SEPARATOR . dirname(__FILE__) . %27/../../lib%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/IDS/ExceptionTest.php",
        "positions": {
          "begin": {
            "line": 50
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$this->path = dirname(__FILE__) . %27/../../lib/IDS/Config/Config.ini%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/IDS/FilterTest.php",
        "positions": {
          "begin": {
            "line": 23
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "set_include_path(get_include_path() . PATH_SEPARATOR . dirname(__FILE__) . %27/../../lib%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/IDS/FilterTest.php",
        "positions": {
          "begin": {
            "line": 29
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$this->path = dirname(__FILE__) . %27/../../lib/IDS/Config/Config.ini%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/IDS/FilterTest.php",
        "positions": {
          "begin": {
            "line": 83
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$this->init->config[%27General%27][%27filter_path%27] = dirname(__FILE__) . %27/../../lib/IDS/default_filter.xml%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/IDS/InitTest.php",
        "positions": {
          "begin": {
            "line": 23
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "set_include_path(get_include_path() . PATH_SEPARATOR . dirname(__FILE__) . %27/../../lib%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/IDS/InitTest.php",
        "positions": {
          "begin": {
            "line": 29
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$this->path = dirname(__FILE__) . %27/../../lib/IDS/Config/Config.ini%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/IDS/MonitorTest.php",
        "positions": {
          "begin": {
            "line": 22
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "set_include_path(get_include_path() . PATH_SEPARATOR . dirname(__FILE__) . %27/../../lib%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/IDS/MonitorTest.php",
        "positions": {
          "begin": {
            "line": 30
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$path = dirname(__FILE__) . %27/../../lib/IDS/Config/Config.ini%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/IDS/MonitorTest.php",
        "positions": {
          "begin": {
            "line": 32
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$this->init->config[%27General%27][%27filter_path%27] = dirname(__FILE__) . %27/../../lib/IDS/default_filter.xml%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/IDS/MonitorTest.php",
        "positions": {
          "begin": {
            "line": 33
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$this->init->config[%27General%27][%27tmp_path%27] = dirname(__FILE__) . %27/../../lib/IDS/tmp%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/IDS/MonitorTest.php",
        "positions": {
          "begin": {
            "line": 34
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$this->init->config[%27Caching%27][%27path%27] = dirname(__FILE__) . %27/../../lib/IDS/tmp/default_filter.cache%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/IDS/MonitorTest.php",
        "positions": {
          "begin": {
            "line": 121
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$this->init->config[%27General%27][%27filter_path%27] = dirname(__FILE__) . %27/../../lib/IDS/default_filter.json%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/IDS/MonitorTest.php",
        "positions": {
          "begin": {
            "line": 133
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$this->init->config[%27General%27][%27filter_path%27] = dirname(__FILE__) . %27/../../lib/IDS/default_filter.xml%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/IDS/MonitorTest.php",
        "positions": {
          "begin": {
            "line": 1222
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$this->init->config[%27General%27][%27HTML_Purifier_Cache%27] = dirname(__FILE__) . %27/../../lib/IDS/tmp/%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/IDS/MonitorTest.php",
        "positions": {
          "begin": {
            "line": 1258
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$this->init->config[%27General%27][%27HTML_Purifier_Cache%27] = dirname(__FILE__) . %27/../../lib/IDS/tmp/%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/IDS/MonitorTest.php",
        "positions": {
          "begin": {
            "line": 1367
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on echo",
        "severity": "5",
        "lineContent": "echo %22\\n\\nNot detected: %22.$exploit.%22\\n\\n%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/IDS/ReportTest.php",
        "positions": {
          "begin": {
            "line": 23
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "set_include_path(get_include_path() . PATH_SEPARATOR . dirname(__FILE__) . %27/../../lib%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/allTests.php",
        "positions": {
          "begin": {
            "line": 26
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "PHPUnit_Util_Filter::addDirectoryToFilter(dirname(__FILE__));"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/allTests.php",
        "positions": {
          "begin": {
            "line": 27
          }
        }
      },
      "metadata": {
        "description": "Filesystem function dirname() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "PHPUnit_Util_Filter::addDirectoryToFilter(dirname(__FILE__) . %27/../lib/IDS/vendors%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "Internal.Tokenizer.Exception",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/coverage/container-min.js",
        "positions": {
          "begin": {
            "line": 1
          }
        }
      },
      "metadata": {
        "description": "File appears to be minified and cannot be processed",
        "severity": "5",
        "lineContent": "/*"
      }
    },
    {
      "type": "sast",
      "ruleId": "Internal.Tokenizer.Exception",
      "location": {
        "path": "DVWA/external/phpids/0.6/tests/coverage/yahoo-dom-event.js",
        "positions": {
          "begin": {
            "line": 1
          }
        }
      },
      "metadata": {
        "description": "File appears to be minified and cannot be processed",
        "severity": "5",
        "lineContent": "/*"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/external/recaptcha/recaptchalib.php",
        "positions": {
          "begin": {
            "line": 28
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_get_contents() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$result  = file_get_contents($url, false, $context);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/hackable/flags/fi.php",
        "positions": {
          "begin": {
            "line": 17
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with $line3 on echo",
        "severity": "5",
        "lineContent": "echo $line3 . %22\\n\\n<br /><br />\\n%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/hackable/flags/fi.php",
        "positions": {
          "begin": {
            "line": 20
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with base64_decode on echo",
        "severity": "5",
        "lineContent": "echo base64_decode( $line4 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/hackable/flags/fi.php",
        "positions": {
          "begin": {
            "line": 20
          }
        }
      },
      "metadata": {
        "description": "Crypto function base64_decode used.",
        "severity": "5",
        "lineContent": "echo base64_decode( $line4 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/ids_log.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/index.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/instructions.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/instructions.php",
        "positions": {
          "begin": {
            "line": 26
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_get_contents() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$instructions = file_get_contents( DVWA_WEB_PAGE_TO_ROOT.$readFile );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CallbackFunctions.WarnCallbackFunctions",
      "location": {
        "path": "DVWA/instructions.php",
        "positions": {
          "begin": {
            "line": 33
          }
        }
      },
      "metadata": {
        "description": "Function preg_replace_callback() that supports callback detected",
        "severity": "5",
        "lineContent": "$instructions = preg_replace_callback("
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/login.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/login.php",
        "positions": {
          "begin": {
            "line": 21
          }
        }
      },
      "metadata": {
        "description": "Crypto function md5 used.",
        "severity": "5",
        "lineContent": "$pass = md5( $pass );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/login.php",
        "positions": {
          "begin": {
            "line": 27
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = @mysqli_query($GLOBALS[%22___mysqli_ston%22],  $query );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/login.php",
        "positions": {
          "begin": {
            "line": 34
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = @mysqli_query($GLOBALS[%22___mysqli_ston%22],  $query ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27.<br />Try <a href=%22setup.php%22>installing again</a>.</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/login.php",
        "positions": {
          "begin": {
            "line": 34
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on die",
        "severity": "5",
        "lineContent": "$result = @mysqli_query($GLOBALS[%22___mysqli_ston%22],  $query ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27.<br />Try <a href=%22setup.php%22>installing again</a>.</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/login.php",
        "positions": {
          "begin": {
            "line": 64
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on echo",
        "severity": "5",
        "lineContent": "<title>Login :: Damn Vulnerable Web Application (DVWA) v%22 . dvwaVersionGet() . %22</title>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/logout.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/phpinfo.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Phpinfos.WarnPhpinfo",
      "location": {
        "path": "DVWA/phpinfo.php",
        "positions": {
          "begin": {
            "line": 8
          }
        }
      },
      "metadata": {
        "description": "phpinfo() function detected",
        "severity": "5",
        "lineContent": "phpinfo();"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/security.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/security.php",
        "positions": {
          "begin": {
            "line": 73
          }
        }
      },
      "metadata": {
        "description": "Filesystem function is_writable() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if( !is_writable( $PHPIDSPath ) ) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/setup.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/setup.php",
        "positions": {
          "begin": {
            "line": 17
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on include_once",
        "severity": "5",
        "lineContent": "include_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/DBMS/MySQL.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/setup.php",
        "positions": {
          "begin": {
            "line": 38
          }
        }
      },
      "metadata": {
        "description": "Filesystem function realpath() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "If you get an error make sure you have the correct user credentials in: <em>%22 . realpath(  getcwd() . DIRECTORY_SEPARATOR . %22config%22 . DIRECTORY_SEPARATOR . %22config.inc.php%22 ) . %22</em></p>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/brute/help/help.php",
        "positions": {
          "begin": {
            "line": 47
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "<p>Using a <?php echo dvwaExternalLinkUrlGet( %27https://en.wikipedia.org/wiki/CAPTCHA%27, %27CAPTCHA%27 ); ?> form could have a similar effect as a CSRF token.</p>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/brute/help/help.php",
        "positions": {
          "begin": {
            "line": 68
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "<p>Reference: <?php echo dvwaExternalLinkUrlGet( %27https://en.wikipedia.org/wiki/Password_cracking%27 ); ?></p>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/brute/index.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.Misc.IncludeMismatch.ErrMiscIncludeMismatchNoExt",
      "location": {
        "path": "DVWA/vulnerabilities/brute/index.php",
        "positions": {
          "begin": {
            "line": 33
          }
        }
      },
      "metadata": {
        "description": "No file extension has been found in a include/require function. This implies that some PHP code is not scanned by PHPCS.",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/brute/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/brute/index.php",
        "positions": {
          "begin": {
            "line": 33
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/brute/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/brute/index.php",
        "positions": {
          "begin": {
            "line": 33
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with %22vulnerabilities/brute/source/{$vulnerabilityFile}%22 on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/brute/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/vulnerabilities/brute/source/high.php",
        "positions": {
          "begin": {
            "line": 16
          }
        }
      },
      "metadata": {
        "description": "Crypto function md5 used.",
        "severity": "5",
        "lineContent": "$pass = md5( $pass );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/vulnerabilities/brute/source/high.php",
        "positions": {
          "begin": {
            "line": 20
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $query ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/brute/source/high.php",
        "positions": {
          "begin": {
            "line": 20
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on die",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $query ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/vulnerabilities/brute/source/impossible.php",
        "positions": {
          "begin": {
            "line": 16
          }
        }
      },
      "metadata": {
        "description": "Crypto function md5 used.",
        "severity": "5",
        "lineContent": "$pass = md5( $pass );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/vulnerabilities/brute/source/low.php",
        "positions": {
          "begin": {
            "line": 9
          }
        }
      },
      "metadata": {
        "description": "Crypto function md5 used.",
        "severity": "5",
        "lineContent": "$pass = md5( $pass );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/vulnerabilities/brute/source/low.php",
        "positions": {
          "begin": {
            "line": 13
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $query ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/brute/source/low.php",
        "positions": {
          "begin": {
            "line": 13
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on die",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $query ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/vulnerabilities/brute/source/medium.php",
        "positions": {
          "begin": {
            "line": 11
          }
        }
      },
      "metadata": {
        "description": "Crypto function md5 used.",
        "severity": "5",
        "lineContent": "$pass = md5( $pass );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/vulnerabilities/brute/source/medium.php",
        "positions": {
          "begin": {
            "line": 15
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $query ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/brute/source/medium.php",
        "positions": {
          "begin": {
            "line": 15
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on die",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $query ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/captcha/help/help.php",
        "positions": {
          "begin": {
            "line": 9
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "<p>A <?php echo dvwaExternalLinkUrlGet( %27https://en.wikipedia.org/wiki/CAPTCHA%27, %27CAPTCHA%27 ); ?> is a program that can tell whether its user is a human or a computer. You%27ve probably seen"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/captcha/help/help.php",
        "positions": {
          "begin": {
            "line": 61
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "<p>Reference: <?php echo dvwaExternalLinkUrlGet( %27https://en.wikipedia.org/wiki/CAPTCHA%27 ); ?></p>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/captcha/index.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/captcha/index.php",
        "positions": {
          "begin": {
            "line": 5
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22external/recaptcha/recaptchalib.php%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.Misc.IncludeMismatch.ErrMiscIncludeMismatchNoExt",
      "location": {
        "path": "DVWA/vulnerabilities/captcha/index.php",
        "positions": {
          "begin": {
            "line": 34
          }
        }
      },
      "metadata": {
        "description": "No file extension has been found in a include/require function. This implies that some PHP code is not scanned by PHPCS.",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/captcha/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/captcha/index.php",
        "positions": {
          "begin": {
            "line": 34
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/captcha/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/captcha/index.php",
        "positions": {
          "begin": {
            "line": 34
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with %22vulnerabilities/captcha/source/{$vulnerabilityFile}%22 on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/captcha/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/vulnerabilities/captcha/index.php",
        "positions": {
          "begin": {
            "line": 39
          }
        }
      },
      "metadata": {
        "description": "Filesystem function realpath() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$WarningHtml = %22<div class=\\%22warning\\%22><em>reCAPTCHA API key missing</em> from config file: %22 . realpath( getcwd() . DIRECTORY_SEPARATOR . DVWA_WEB_PAGE_TO_ROOT . %22config%22 . DIRECTORY_SEPARATOR . %22config.inc.php%22 ) . %22</div>%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/vulnerabilities/captcha/source/high.php",
        "positions": {
          "begin": {
            "line": 27
          }
        }
      },
      "metadata": {
        "description": "Crypto function md5 used.",
        "severity": "5",
        "lineContent": "$pass_new = md5( $pass_new );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/vulnerabilities/captcha/source/high.php",
        "positions": {
          "begin": {
            "line": 31
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $insert ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/captcha/source/high.php",
        "positions": {
          "begin": {
            "line": 31
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on die",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $insert ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/vulnerabilities/captcha/source/impossible.php",
        "positions": {
          "begin": {
            "line": 14
          }
        }
      },
      "metadata": {
        "description": "Crypto function md5 used.",
        "severity": "5",
        "lineContent": "$pass_new  = md5( $pass_new );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/vulnerabilities/captcha/source/impossible.php",
        "positions": {
          "begin": {
            "line": 19
          }
        }
      },
      "metadata": {
        "description": "Crypto function md5 used.",
        "severity": "5",
        "lineContent": "$pass_conf = md5( $pass_conf );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/vulnerabilities/captcha/source/impossible.php",
        "positions": {
          "begin": {
            "line": 24
          }
        }
      },
      "metadata": {
        "description": "Crypto function md5 used.",
        "severity": "5",
        "lineContent": "$pass_curr = md5( $pass_curr );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/vulnerabilities/captcha/source/low.php",
        "positions": {
          "begin": {
            "line": 57
          }
        }
      },
      "metadata": {
        "description": "Crypto function md5 used.",
        "severity": "5",
        "lineContent": "$pass_new = md5( $pass_new );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/vulnerabilities/captcha/source/low.php",
        "positions": {
          "begin": {
            "line": 61
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $insert ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/captcha/source/low.php",
        "positions": {
          "begin": {
            "line": 61
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on die",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $insert ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/vulnerabilities/captcha/source/medium.php",
        "positions": {
          "begin": {
            "line": 65
          }
        }
      },
      "metadata": {
        "description": "Crypto function md5 used.",
        "severity": "5",
        "lineContent": "$pass_new = md5( $pass_new );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/vulnerabilities/captcha/source/medium.php",
        "positions": {
          "begin": {
            "line": 69
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $insert ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/captcha/source/medium.php",
        "positions": {
          "begin": {
            "line": 69
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on die",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $insert ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/csp/help/help.php",
        "positions": {
          "begin": {
            "line": 49
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "<p>Reference: <?php echo dvwaExternalLinkUrlGet( %27https://content-security-policy.com/%27, %22Content Security Policy Reference%22 ); ?></p>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/csp/help/help.php",
        "positions": {
          "begin": {
            "line": 50
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "<p>Reference: <?php echo dvwaExternalLinkUrlGet( %27https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP%27, %22Mozilla Developer Network - CSP: script-src%22); ?></p>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/csp/help/help.php",
        "positions": {
          "begin": {
            "line": 51
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "<p>Reference: <?php echo dvwaExternalLinkUrlGet( %27https://blog.mozilla.org/security/2014/10/04/csp-for-the-web-we-have/%27, %22Mozilla Security Blog - CSP for the web we have%22 ); ?></p>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/csp/index.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.Misc.IncludeMismatch.ErrMiscIncludeMismatchNoExt",
      "location": {
        "path": "DVWA/vulnerabilities/csp/index.php",
        "positions": {
          "begin": {
            "line": 39
          }
        }
      },
      "metadata": {
        "description": "No file extension has been found in a include/require function. This implies that some PHP code is not scanned by PHPCS.",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/csp/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/csp/index.php",
        "positions": {
          "begin": {
            "line": 39
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/csp/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/csp/index.php",
        "positions": {
          "begin": {
            "line": 39
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with %22vulnerabilities/csp/source/{$vulnerabilityFile}%22 on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/csp/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/csp/source/jsonp.php",
        "positions": {
          "begin": {
            "line": 12
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with $callback on echo",
        "severity": "5",
        "lineContent": "echo $callback . %22(%22.json_encode($outp).%22)%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/csp/source/jsonp_impossible.php",
        "positions": {
          "begin": {
            "line": 6
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on echo",
        "severity": "5",
        "lineContent": "echo %22solveSum (%22.json_encode($outp).%22)%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/csrf/help/help.php",
        "positions": {
          "begin": {
            "line": 56
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "<p>Reference: <?php echo dvwaExternalLinkUrlGet( %27https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)%27 ); ?></p>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/csrf/index.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.Misc.IncludeMismatch.ErrMiscIncludeMismatchNoExt",
      "location": {
        "path": "DVWA/vulnerabilities/csrf/index.php",
        "positions": {
          "begin": {
            "line": 32
          }
        }
      },
      "metadata": {
        "description": "No file extension has been found in a include/require function. This implies that some PHP code is not scanned by PHPCS.",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/csrf/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/csrf/index.php",
        "positions": {
          "begin": {
            "line": 32
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/csrf/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/csrf/index.php",
        "positions": {
          "begin": {
            "line": 32
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with %22vulnerabilities/csrf/source/{$vulnerabilityFile}%22 on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/csrf/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/vulnerabilities/csrf/source/high.php",
        "positions": {
          "begin": {
            "line": 15
          }
        }
      },
      "metadata": {
        "description": "Crypto function md5 used.",
        "severity": "5",
        "lineContent": "$pass_new = md5( $pass_new );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/vulnerabilities/csrf/source/high.php",
        "positions": {
          "begin": {
            "line": 19
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $insert ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/csrf/source/high.php",
        "positions": {
          "begin": {
            "line": 19
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on die",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $insert ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/vulnerabilities/csrf/source/impossible.php",
        "positions": {
          "begin": {
            "line": 15
          }
        }
      },
      "metadata": {
        "description": "Crypto function md5 used.",
        "severity": "5",
        "lineContent": "$pass_curr = md5( $pass_curr );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/vulnerabilities/csrf/source/impossible.php",
        "positions": {
          "begin": {
            "line": 28
          }
        }
      },
      "metadata": {
        "description": "Crypto function md5 used.",
        "severity": "5",
        "lineContent": "$pass_new = md5( $pass_new );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/vulnerabilities/csrf/source/low.php",
        "positions": {
          "begin": {
            "line": 12
          }
        }
      },
      "metadata": {
        "description": "Crypto function md5 used.",
        "severity": "5",
        "lineContent": "$pass_new = md5( $pass_new );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/vulnerabilities/csrf/source/low.php",
        "positions": {
          "begin": {
            "line": 16
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $insert ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/csrf/source/low.php",
        "positions": {
          "begin": {
            "line": 16
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on die",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $insert ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/vulnerabilities/csrf/source/medium.php",
        "positions": {
          "begin": {
            "line": 14
          }
        }
      },
      "metadata": {
        "description": "Crypto function md5 used.",
        "severity": "5",
        "lineContent": "$pass_new = md5( $pass_new );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/vulnerabilities/csrf/source/medium.php",
        "positions": {
          "begin": {
            "line": 18
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $insert ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/csrf/source/medium.php",
        "positions": {
          "begin": {
            "line": 18
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on die",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $insert ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/exec/help/help.php",
        "positions": {
          "begin": {
            "line": 45
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "<pre>Spoiler: <span class=%22spoiler%22><?php echo dvwaExternalLinkUrlGet( %27https://secure.php.net/manual/en/function.trim.php%27, %27trim()%27 ); ?>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/exec/help/help.php",
        "positions": {
          "begin": {
            "line": 61
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "<p>Reference: <?php echo dvwaExternalLinkUrlGet( %27https://www.owasp.org/index.php/Command_Injection%27 ); ?></p>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/exec/index.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.Misc.IncludeMismatch.ErrMiscIncludeMismatchNoExt",
      "location": {
        "path": "DVWA/vulnerabilities/exec/index.php",
        "positions": {
          "begin": {
            "line": 32
          }
        }
      },
      "metadata": {
        "description": "No file extension has been found in a include/require function. This implies that some PHP code is not scanned by PHPCS.",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/exec/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/exec/index.php",
        "positions": {
          "begin": {
            "line": 32
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/exec/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/exec/index.php",
        "positions": {
          "begin": {
            "line": 32
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with %22vulnerabilities/exec/source/{$vulnerabilityFile}%22 on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/exec/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.SystemExecFunctions.WarnSystemExec",
      "location": {
        "path": "DVWA/vulnerabilities/exec/source/high.php",
        "positions": {
          "begin": {
            "line": 26
          }
        }
      },
      "metadata": {
        "description": "System program execution function shell_exec() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$cmd = shell_exec( %27ping  %27 . $target );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.SystemExecFunctions.WarnSystemExec",
      "location": {
        "path": "DVWA/vulnerabilities/exec/source/high.php",
        "positions": {
          "begin": {
            "line": 30
          }
        }
      },
      "metadata": {
        "description": "System program execution function shell_exec() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$cmd = shell_exec( %27ping  -c 4 %27 . $target );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.SystemExecFunctions.WarnSystemExec",
      "location": {
        "path": "DVWA/vulnerabilities/exec/source/impossible.php",
        "positions": {
          "begin": {
            "line": 22
          }
        }
      },
      "metadata": {
        "description": "System program execution function shell_exec() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$cmd = shell_exec( %27ping  %27 . $target );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.SystemExecFunctions.WarnSystemExec",
      "location": {
        "path": "DVWA/vulnerabilities/exec/source/impossible.php",
        "positions": {
          "begin": {
            "line": 26
          }
        }
      },
      "metadata": {
        "description": "System program execution function shell_exec() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$cmd = shell_exec( %27ping  -c 4 %27 . $target );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.SystemExecFunctions.WarnSystemExec",
      "location": {
        "path": "DVWA/vulnerabilities/exec/source/low.php",
        "positions": {
          "begin": {
            "line": 10
          }
        }
      },
      "metadata": {
        "description": "System program execution function shell_exec() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$cmd = shell_exec( %27ping  %27 . $target );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.SystemExecFunctions.WarnSystemExec",
      "location": {
        "path": "DVWA/vulnerabilities/exec/source/low.php",
        "positions": {
          "begin": {
            "line": 14
          }
        }
      },
      "metadata": {
        "description": "System program execution function shell_exec() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$cmd = shell_exec( %27ping  -c 4 %27 . $target );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.SystemExecFunctions.WarnSystemExec",
      "location": {
        "path": "DVWA/vulnerabilities/exec/source/medium.php",
        "positions": {
          "begin": {
            "line": 19
          }
        }
      },
      "metadata": {
        "description": "System program execution function shell_exec() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$cmd = shell_exec( %27ping  %27 . $target );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.SystemExecFunctions.WarnSystemExec",
      "location": {
        "path": "DVWA/vulnerabilities/exec/source/medium.php",
        "positions": {
          "begin": {
            "line": 23
          }
        }
      },
      "metadata": {
        "description": "System program execution function shell_exec() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$cmd = shell_exec( %27ping  -c 4 %27 . $target );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/fi/help/help.php",
        "positions": {
          "begin": {
            "line": 39
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "Spoiler: <span class=%22spoiler%22>RFI: <?php echo dvwaExternalLinkUrlGet( %27https://secure.php.net/manual/en/wrappers.php%27, %27PHP Streams%27 ); ?></span>.</pre>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/fi/help/help.php",
        "positions": {
          "begin": {
            "line": 61
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "<p>Reference: <?php echo dvwaExternalLinkUrlGet( %27https://www.owasp.org/index.php/Top_10_2007-A3%27 ); ?></p>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/fi/index.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.Misc.IncludeMismatch.ErrMiscIncludeMismatchNoExt",
      "location": {
        "path": "DVWA/vulnerabilities/fi/index.php",
        "positions": {
          "begin": {
            "line": 32
          }
        }
      },
      "metadata": {
        "description": "No file extension has been found in a include/require function. This implies that some PHP code is not scanned by PHPCS.",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/fi/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/fi/index.php",
        "positions": {
          "begin": {
            "line": 32
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/fi/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/fi/index.php",
        "positions": {
          "begin": {
            "line": 32
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with %22vulnerabilities/fi/source/{$vulnerabilityFile}%22 on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/fi/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/fi/index.php",
        "positions": {
          "begin": {
            "line": 36
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $file on include",
        "severity": "5",
        "lineContent": "include( $file );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/vulnerabilities/fi/source/high.php",
        "positions": {
          "begin": {
            "line": 7
          }
        }
      },
      "metadata": {
        "description": "Filesystem function fnmatch() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if( !fnmatch( %22file*%22, $file ) && $file != %22include.php%22 ) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/javascript/help/help.php",
        "positions": {
          "begin": {
            "line": 47
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "<li><?php echo dvwaExternalLinkUrlGet( %27https://www.youtube.com/watch?v=8UqHCrGdxOM%27 )?></li>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/javascript/help/help.php",
        "positions": {
          "begin": {
            "line": 48
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "<li><?php echo dvwaExternalLinkUrlGet( %27https://www.w3schools.com/js/%27 )?></li>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/javascript/help/help.php",
        "positions": {
          "begin": {
            "line": 49
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "<li><?php echo dvwaExternalLinkUrlGet( %27https://www.youtube.com/watch?v=cs7EQdWO5o0&index=17&list=WL%27 )?></li>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/javascript/help/help.php",
        "positions": {
          "begin": {
            "line": 50
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "<li><?php echo dvwaExternalLinkUrlGet( %27https://www.youtube.com/playlist?list=PLC9K7uaDMdAUNktlDTxsmj6rJBf4Q9TR5%27 )?></li>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/javascript/index.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/vulnerabilities/javascript/index.php",
        "positions": {
          "begin": {
            "line": 43
          }
        }
      },
      "metadata": {
        "description": "Crypto function md5 used.",
        "severity": "5",
        "lineContent": "if ($token == md5(str_rot13(%22success%22))) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/vulnerabilities/javascript/index.php",
        "positions": {
          "begin": {
            "line": 43
          }
        }
      },
      "metadata": {
        "description": "Crypto function str_rot13 used.",
        "severity": "5",
        "lineContent": "if ($token == md5(str_rot13(%22success%22))) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/vulnerabilities/javascript/index.php",
        "positions": {
          "begin": {
            "line": 57
          }
        }
      },
      "metadata": {
        "description": "Crypto function hash used.",
        "severity": "5",
        "lineContent": "if ($token == hash(%22sha256%22, hash(%22sha256%22, %22XX%22 . strrev(%22success%22)) . %22ZZ%22)) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/vulnerabilities/javascript/index.php",
        "positions": {
          "begin": {
            "line": 57
          }
        }
      },
      "metadata": {
        "description": "Crypto function hash used.",
        "severity": "5",
        "lineContent": "if ($token == hash(%22sha256%22, hash(%22sha256%22, %22XX%22 . strrev(%22success%22)) . %22ZZ%22)) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.Misc.IncludeMismatch.ErrMiscIncludeMismatchNoExt",
      "location": {
        "path": "DVWA/vulnerabilities/javascript/index.php",
        "positions": {
          "begin": {
            "line": 105
          }
        }
      },
      "metadata": {
        "description": "No file extension has been found in a include/require function. This implies that some PHP code is not scanned by PHPCS.",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/javascript/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/javascript/index.php",
        "positions": {
          "begin": {
            "line": 105
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/javascript/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/javascript/index.php",
        "positions": {
          "begin": {
            "line": 105
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with %22vulnerabilities/javascript/source/{$vulnerabilityFile}%22 on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/javascript/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "Internal.Tokenizer.Exception",
      "location": {
        "path": "DVWA/vulnerabilities/javascript/source/high.js",
        "positions": {
          "begin": {
            "line": 1
          }
        }
      },
      "metadata": {
        "description": "File appears to be minified and cannot be processed",
        "severity": "5",
        "lineContent": "var a=[%27fromCharCode%27,%27toString%27,%27replace%27,%27BeJ%27,%27\\x5cw+%27,%27Lyg%27,%27SuR%27,%27(w(){\\x273M\\x203L\\x27;q\\x201l=\\x273K\\x203I\\x203J\\x20T\\x27;q\\x201R=1c\\x202I===\\x271n\\x27;q\\x20Y=1R?2I:{};p(Y.3N){1R=1O}q\\x202L=!1R&&1c\\x202M===\\x271n\\x27;q\\x202o=!Y.2S&&1c\\x202d===\\x271n\\x27&&2d.2Q&&2d.2Q.3S;p(2o){Y=3R}z\\x20p(2L){Y=2M}q\\x202G=!Y.3Q&&1c\\x202g===\\x271n\\x27&&2g.X;q\\[gr-truncated]"
      }
    },
    {
      "type": "sast",
      "ruleId": "Internal.Tokenizer.Exception",
      "location": {
        "path": "DVWA/vulnerabilities/javascript/source/medium.js",
        "positions": {
          "begin": {
            "line": 1
          }
        }
      },
      "metadata": {
        "description": "File appears to be minified and cannot be processed",
        "severity": "5",
        "lineContent": "function do_something(e){for(var t=%22%22,n=e.length-1;n>=0;n--)t+=e[n];return t}setTimeout(function(){do_elsesomething(%22XX%22)},300);function do_elsesomething(e){document.getElementById(%22token%22).value=do_something(e+document.getElementById(%22phrase%22).value+%22XX%22)}"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/sqli/help/help.php",
        "positions": {
          "begin": {
            "line": 33
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "%22<?php echo dvwaExternalLinkUrlGet( %27https://secure.php.net/manual/en/function.mysql-real-escape-string.php%27, %27mysql_real_escape_string()%27 ); ?>%22."
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/sqli/help/help.php",
        "positions": {
          "begin": {
            "line": 59
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "<p>Reference: <?php echo dvwaExternalLinkUrlGet( %27https://www.owasp.org/index.php/SQL_Injection%27 ); ?></p>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/sqli/index.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.Misc.IncludeMismatch.ErrMiscIncludeMismatchNoExt",
      "location": {
        "path": "DVWA/vulnerabilities/sqli/index.php",
        "positions": {
          "begin": {
            "line": 34
          }
        }
      },
      "metadata": {
        "description": "No file extension has been found in a include/require function. This implies that some PHP code is not scanned by PHPCS.",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/sqli/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/sqli/index.php",
        "positions": {
          "begin": {
            "line": 34
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/sqli/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/sqli/index.php",
        "positions": {
          "begin": {
            "line": 34
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with %22vulnerabilities/sqli/source/{$vulnerabilityFile}%22 on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/sqli/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/sqli/session-input.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/vulnerabilities/sqli/source/high.php",
        "positions": {
          "begin": {
            "line": 9
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22], $query ) or die( %27<pre>Something went wrong.</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/vulnerabilities/sqli/source/low.php",
        "positions": {
          "begin": {
            "line": 9
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $query ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/sqli/source/low.php",
        "positions": {
          "begin": {
            "line": 9
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on die",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $query ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/vulnerabilities/sqli/source/medium.php",
        "positions": {
          "begin": {
            "line": 10
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22], $query) or die( %27<pre>%27 . mysqli_error($GLOBALS[%22___mysqli_ston%22]) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/sqli/source/medium.php",
        "positions": {
          "begin": {
            "line": 10
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on die",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22], $query) or die( %27<pre>%27 . mysqli_error($GLOBALS[%22___mysqli_ston%22]) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/vulnerabilities/sqli/source/medium.php",
        "positions": {
          "begin": {
            "line": 27
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $query ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/sqli/source/medium.php",
        "positions": {
          "begin": {
            "line": 27
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on die",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $query ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/sqli_blind/cookie-input.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/sqli_blind/help/help.php",
        "positions": {
          "begin": {
            "line": 34
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "%22<?php echo dvwaExternalLinkUrlGet( %27https://secure.php.net/manual/en/function.mysql-real-escape-string.php%27, %27mysql_real_escape_string()%27 ); ?>%22."
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/sqli_blind/help/help.php",
        "positions": {
          "begin": {
            "line": 61
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "<p>Reference: <?php echo dvwaExternalLinkUrlGet( %27https://www.owasp.org/index.php/Blind_SQL_Injection%27 ); ?></p>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/sqli_blind/index.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.Misc.IncludeMismatch.ErrMiscIncludeMismatchNoExt",
      "location": {
        "path": "DVWA/vulnerabilities/sqli_blind/index.php",
        "positions": {
          "begin": {
            "line": 34
          }
        }
      },
      "metadata": {
        "description": "No file extension has been found in a include/require function. This implies that some PHP code is not scanned by PHPCS.",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/sqli_blind/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/sqli_blind/index.php",
        "positions": {
          "begin": {
            "line": 34
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/sqli_blind/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/sqli_blind/index.php",
        "positions": {
          "begin": {
            "line": 34
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with %22vulnerabilities/sqli_blind/source/{$vulnerabilityFile}%22 on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/sqli_blind/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/vulnerabilities/sqli_blind/index.php",
        "positions": {
          "begin": {
            "line": 64
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $query ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/sqli_blind/index.php",
        "positions": {
          "begin": {
            "line": 64
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on die",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $query ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/vulnerabilities/sqli_blind/source/high.php",
        "positions": {
          "begin": {
            "line": 9
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $getid ); // Removed %27or die%27 to suppress mysql errors"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/vulnerabilities/sqli_blind/source/low.php",
        "positions": {
          "begin": {
            "line": 9
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $getid ); // Removed %27or die%27 to suppress mysql errors"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/vulnerabilities/sqli_blind/source/medium.php",
        "positions": {
          "begin": {
            "line": 10
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $getid ); // Removed %27or die%27 to suppress mysql errors"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/upload/help/help.php",
        "positions": {
          "begin": {
            "line": 18
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "<p>Execute any PHP function of your choosing on the target system (such as <?php echo dvwaExternalLinkUrlGet( %27https://secure.php.net/manual/en/function.phpinfo.php%27, %27phpinfo()%27 ); ?>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/upload/help/help.php",
        "positions": {
          "begin": {
            "line": 19
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "or <?php echo dvwaExternalLinkUrlGet( %27https://secure.php.net/manual/en/function.system.php%27, %27system()%27 ); ?>) thanks to this file upload vulnerability.</p>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/upload/help/help.php",
        "positions": {
          "begin": {
            "line": 52
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "<p>Reference: <?php echo dvwaExternalLinkUrlGet( %27https://www.owasp.org/index.php/Unrestricted_File_Upload%27 ); ?></p>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/upload/index.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.Misc.IncludeMismatch.ErrMiscIncludeMismatchNoExt",
      "location": {
        "path": "DVWA/vulnerabilities/upload/index.php",
        "positions": {
          "begin": {
            "line": 32
          }
        }
      },
      "metadata": {
        "description": "No file extension has been found in a include/require function. This implies that some PHP code is not scanned by PHPCS.",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/upload/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/upload/index.php",
        "positions": {
          "begin": {
            "line": 32
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/upload/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/upload/index.php",
        "positions": {
          "begin": {
            "line": 32
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with %22vulnerabilities/upload/source/{$vulnerabilityFile}%22 on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/upload/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/vulnerabilities/upload/index.php",
        "positions": {
          "begin": {
            "line": 36
          }
        }
      },
      "metadata": {
        "description": "Filesystem function is_writable() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if( !is_writable( $PHPUploadPath ) ) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.ErrFilesystem",
      "location": {
        "path": "DVWA/vulnerabilities/upload/source/high.php",
        "positions": {
          "begin": {
            "line": 6
          }
        }
      },
      "metadata": {
        "description": "Filesystem function basename() detected with dynamic parameter directly from user input",
        "severity": "5",
        "lineContent": "$target_path .= basename( $_FILES[ %27uploaded%27 ][ %27name%27 ] );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/vulnerabilities/upload/source/high.php",
        "positions": {
          "begin": {
            "line": 17
          }
        }
      },
      "metadata": {
        "description": "Filesystem function getimagesize() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "getimagesize( $uploaded_tmp ) ) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/vulnerabilities/upload/source/high.php",
        "positions": {
          "begin": {
            "line": 20
          }
        }
      },
      "metadata": {
        "description": "Filesystem function move_uploaded_file() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if( !move_uploaded_file( $uploaded_tmp, $target_path ) ) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/vulnerabilities/upload/source/impossible.php",
        "positions": {
          "begin": {
            "line": 18
          }
        }
      },
      "metadata": {
        "description": "Crypto function md5 used.",
        "severity": "5",
        "lineContent": "$target_file   =  md5( uniqid() . $uploaded_name ) . %27.%27 . $uploaded_ext;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/vulnerabilities/upload/source/impossible.php",
        "positions": {
          "begin": {
            "line": 20
          }
        }
      },
      "metadata": {
        "description": "Crypto function md5 used.",
        "severity": "5",
        "lineContent": "$temp_file    .= DIRECTORY_SEPARATOR . md5( uniqid() . $uploaded_name ) . %27.%27 . $uploaded_ext;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/vulnerabilities/upload/source/impossible.php",
        "positions": {
          "begin": {
            "line": 26
          }
        }
      },
      "metadata": {
        "description": "Filesystem function getimagesize() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "getimagesize( $uploaded_tmp ) ) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/vulnerabilities/upload/source/impossible.php",
        "positions": {
          "begin": {
            "line": 30
          }
        }
      },
      "metadata": {
        "description": "Filesystem function imagecreatefromjpeg() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$img = imagecreatefromjpeg( $uploaded_tmp );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/vulnerabilities/upload/source/impossible.php",
        "positions": {
          "begin": {
            "line": 31
          }
        }
      },
      "metadata": {
        "description": "Filesystem function imagejpeg() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "imagejpeg( $img, $temp_file, 100);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/vulnerabilities/upload/source/impossible.php",
        "positions": {
          "begin": {
            "line": 34
          }
        }
      },
      "metadata": {
        "description": "Filesystem function imagecreatefrompng() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$img = imagecreatefrompng( $uploaded_tmp );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/vulnerabilities/upload/source/impossible.php",
        "positions": {
          "begin": {
            "line": 35
          }
        }
      },
      "metadata": {
        "description": "Filesystem function imagepng() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "imagepng( $img, $temp_file, 9);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/vulnerabilities/upload/source/impossible.php",
        "positions": {
          "begin": {
            "line": 40
          }
        }
      },
      "metadata": {
        "description": "Filesystem function rename() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if( rename( $temp_file, ( getcwd() . DIRECTORY_SEPARATOR . $target_path . $target_file ) ) ) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/vulnerabilities/upload/source/impossible.php",
        "positions": {
          "begin": {
            "line": 50
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_exists() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if( file_exists( $temp_file ) )"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/vulnerabilities/upload/source/impossible.php",
        "positions": {
          "begin": {
            "line": 51
          }
        }
      },
      "metadata": {
        "description": "Filesystem function unlink() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "unlink( $temp_file );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.ErrFilesystem",
      "location": {
        "path": "DVWA/vulnerabilities/upload/source/low.php",
        "positions": {
          "begin": {
            "line": 6
          }
        }
      },
      "metadata": {
        "description": "Filesystem function basename() detected with dynamic parameter directly from user input",
        "severity": "5",
        "lineContent": "$target_path .= basename( $_FILES[ %27uploaded%27 ][ %27name%27 ] );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.ErrFilesystem",
      "location": {
        "path": "DVWA/vulnerabilities/upload/source/low.php",
        "positions": {
          "begin": {
            "line": 9
          }
        }
      },
      "metadata": {
        "description": "Filesystem function move_uploaded_file() detected with dynamic parameter directly from user input",
        "severity": "5",
        "lineContent": "if( !move_uploaded_file( $_FILES[ %27uploaded%27 ][ %27tmp_name%27 ], $target_path ) ) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.ErrFilesystem",
      "location": {
        "path": "DVWA/vulnerabilities/upload/source/medium.php",
        "positions": {
          "begin": {
            "line": 6
          }
        }
      },
      "metadata": {
        "description": "Filesystem function basename() detected with dynamic parameter directly from user input",
        "severity": "5",
        "lineContent": "$target_path .= basename( $_FILES[ %27uploaded%27 ][ %27name%27 ] );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.ErrFilesystem",
      "location": {
        "path": "DVWA/vulnerabilities/upload/source/medium.php",
        "positions": {
          "begin": {
            "line": 18
          }
        }
      },
      "metadata": {
        "description": "Filesystem function move_uploaded_file() detected with dynamic parameter directly from user input",
        "severity": "5",
        "lineContent": "if( !move_uploaded_file( $_FILES[ %27uploaded%27 ][ %27tmp_name%27 ], $target_path ) ) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/view_help.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.NoEvals.NoEvals",
      "location": {
        "path": "DVWA/vulnerabilities/view_help.php",
        "positions": {
          "begin": {
            "line": 15
          }
        }
      },
      "metadata": {
        "description": "Please do not use eval() functions",
        "severity": "5",
        "lineContent": "eval( %27?>%27 . file_get_contents( DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/{$id}/help/help.php%22 ) . %27<?php %27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/vulnerabilities/view_help.php",
        "positions": {
          "begin": {
            "line": 15
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_get_contents() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "eval( %27?>%27 . file_get_contents( DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/{$id}/help/help.php%22 ) . %27<?php %27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/view_source.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/vulnerabilities/view_source.php",
        "positions": {
          "begin": {
            "line": 53
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_get_contents() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$source = @file_get_contents( DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/{$id}/source/{$security}.php%22 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/vulnerabilities/view_source.php",
        "positions": {
          "begin": {
            "line": 57
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_exists() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "if (file_exists (DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/{$id}/source/{$security}.js%22)) {"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/vulnerabilities/view_source.php",
        "positions": {
          "begin": {
            "line": 58
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_get_contents() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$js_source = @file_get_contents( DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/{$id}/source/{$security}.js%22 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/view_source_all.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/vulnerabilities/view_source_all.php",
        "positions": {
          "begin": {
            "line": 13
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_get_contents() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$lowsrc = @file_get_contents(%22./{$id}/source/low.php%22);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/vulnerabilities/view_source_all.php",
        "positions": {
          "begin": {
            "line": 17
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_get_contents() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$medsrc = @file_get_contents(%22./{$id}/source/medium.php%22);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/vulnerabilities/view_source_all.php",
        "positions": {
          "begin": {
            "line": 21
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_get_contents() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$highsrc = @file_get_contents(%22./{$id}/source/high.php%22);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "DVWA/vulnerabilities/view_source_all.php",
        "positions": {
          "begin": {
            "line": 25
          }
        }
      },
      "metadata": {
        "description": "Filesystem function file_get_contents() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "$impsrc = @file_get_contents(%22./{$id}/source/impossible.php%22);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/weak_id/help/help.php",
        "positions": {
          "begin": {
            "line": 38
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "<p>Reference: <?php echo dvwaExternalLinkUrlGet( %27https://www.owasp.org/index.php/Top_10_2013-A2-Broken_Authentication_and_Session_Management%27 ); ?></p>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/weak_id/index.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.Misc.IncludeMismatch.ErrMiscIncludeMismatchNoExt",
      "location": {
        "path": "DVWA/vulnerabilities/weak_id/index.php",
        "positions": {
          "begin": {
            "line": 33
          }
        }
      },
      "metadata": {
        "description": "No file extension has been found in a include/require function. This implies that some PHP code is not scanned by PHPCS.",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/weak_id/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/weak_id/index.php",
        "positions": {
          "begin": {
            "line": 33
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/weak_id/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/weak_id/index.php",
        "positions": {
          "begin": {
            "line": 33
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with %22vulnerabilities/weak_id/source/{$vulnerabilityFile}%22 on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/weak_id/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/vulnerabilities/weak_id/source/high.php",
        "positions": {
          "begin": {
            "line": 10
          }
        }
      },
      "metadata": {
        "description": "Crypto function md5 used.",
        "severity": "5",
        "lineContent": "$cookie_value = md5($_SESSION[%27last_session_id_high%27]);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "DVWA/vulnerabilities/weak_id/source/impossible.php",
        "positions": {
          "begin": {
            "line": 6
          }
        }
      },
      "metadata": {
        "description": "Crypto function sha1 used.",
        "severity": "5",
        "lineContent": "$cookie_value = sha1(mt_rand() . time() . %22Impossible%22);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/xss_d/help/help.php",
        "positions": {
          "begin": {
            "line": 36
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with ; on <?=",
        "severity": "5",
        "lineContent": "<?=htmlentities (%22/vulnerabilities/xss_d/?default=English>/option></select><img src=%27x%27 onerror=%27alert(1)%27>%22);?></span>.</pre>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/xss_d/help/help.php",
        "positions": {
          "begin": {
            "line": 57
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "<p>Reference: <?php echo dvwaExternalLinkUrlGet( %27https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)%27 ); ?></p>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/xss_d/index.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.Misc.IncludeMismatch.ErrMiscIncludeMismatchNoExt",
      "location": {
        "path": "DVWA/vulnerabilities/xss_d/index.php",
        "positions": {
          "begin": {
            "line": 32
          }
        }
      },
      "metadata": {
        "description": "No file extension has been found in a include/require function. This implies that some PHP code is not scanned by PHPCS.",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/xss_d/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/xss_d/index.php",
        "positions": {
          "begin": {
            "line": 32
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/xss_d/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/xss_d/index.php",
        "positions": {
          "begin": {
            "line": 32
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with %22vulnerabilities/xss_d/source/{$vulnerabilityFile}%22 on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/xss_d/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/xss_r/help/help.php",
        "positions": {
          "begin": {
            "line": 46
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "<p>Using inbuilt PHP functions (such as %22<?php echo dvwaExternalLinkUrlGet( %27https://secure.php.net/manual/en/function.htmlspecialchars.php%27, %27htmlspecialchars()%27 ); ?>%22),"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/xss_r/help/help.php",
        "positions": {
          "begin": {
            "line": 56
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "<p>Reference: <?php echo dvwaExternalLinkUrlGet( %27https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)%27 ); ?></p>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/xss_r/index.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.Misc.IncludeMismatch.ErrMiscIncludeMismatchNoExt",
      "location": {
        "path": "DVWA/vulnerabilities/xss_r/index.php",
        "positions": {
          "begin": {
            "line": 32
          }
        }
      },
      "metadata": {
        "description": "No file extension has been found in a include/require function. This implies that some PHP code is not scanned by PHPCS.",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/xss_r/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/xss_r/index.php",
        "positions": {
          "begin": {
            "line": 32
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/xss_r/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/xss_r/index.php",
        "positions": {
          "begin": {
            "line": 32
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with %22vulnerabilities/xss_r/source/{$vulnerabilityFile}%22 on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/xss_r/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/xss_s/help/help.php",
        "positions": {
          "begin": {
            "line": 45
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "<p>Using inbuilt PHP functions (such as %22<?php echo dvwaExternalLinkUrlGet( %27https://secure.php.net/manual/en/function.htmlspecialchars.php%27, %27htmlspecialchars()%27 ); ?>%22),"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/xss_s/help/help.php",
        "positions": {
          "begin": {
            "line": 55
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with dvwaExternalLinkUrlGet on echo",
        "severity": "5",
        "lineContent": "<p>Reference: <?php echo dvwaExternalLinkUrlGet( %27https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)%27 ); ?></p>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/xss_s/index.php",
        "positions": {
          "begin": {
            "line": 4
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %27dvwa/includes/dvwaPage.inc.php%27;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/vulnerabilities/xss_s/index.php",
        "positions": {
          "begin": {
            "line": 18
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $query ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/xss_s/index.php",
        "positions": {
          "begin": {
            "line": 18
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on die",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $query ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.Misc.IncludeMismatch.ErrMiscIncludeMismatchNoExt",
      "location": {
        "path": "DVWA/vulnerabilities/xss_s/index.php",
        "positions": {
          "begin": {
            "line": 37
          }
        }
      },
      "metadata": {
        "description": "No file extension has been found in a include/require function. This implies that some PHP code is not scanned by PHPCS.",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/xss_s/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/xss_s/index.php",
        "positions": {
          "begin": {
            "line": 37
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with DVWA_WEB_PAGE_TO_ROOT on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/xss_s/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "DVWA/vulnerabilities/xss_s/index.php",
        "positions": {
          "begin": {
            "line": 37
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with %22vulnerabilities/xss_s/source/{$vulnerabilityFile}%22 on require_once",
        "severity": "5",
        "lineContent": "require_once DVWA_WEB_PAGE_TO_ROOT . %22vulnerabilities/xss_s/source/{$vulnerabilityFile}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/vulnerabilities/xss_s/source/high.php",
        "positions": {
          "begin": {
            "line": 19
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $query ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/xss_s/source/high.php",
        "positions": {
          "begin": {
            "line": 19
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on die",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $query ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/vulnerabilities/xss_s/source/low.php",
        "positions": {
          "begin": {
            "line": 17
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $query ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/xss_s/source/low.php",
        "positions": {
          "begin": {
            "line": 17
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on die",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $query ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/vulnerabilities/xss_s/source/medium.php",
        "positions": {
          "begin": {
            "line": 19
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $query ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "DVWA/vulnerabilities/xss_s/source/medium.php",
        "positions": {
          "begin": {
            "line": 19
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on die",
        "severity": "5",
        "lineContent": "$result = mysqli_query($GLOBALS[%22___mysqli_ston%22],  $query ) or die( %27<pre>%27 . ((is_object($GLOBALS[%22___mysqli_ston%22])) ? mysqli_error($GLOBALS[%22___mysqli_ston%22]) : (($___mysqli_res = mysqli_connect_error()) ? $___mysqli_res : false)) . %27</pre>%27 );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "DVWA/vulnerabilities/xss_s/source/medium.php",
        "positions": {
          "begin": {
            "line": 42
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = mysqli_query($con, $query);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "SN_full.php",
        "positions": {
          "begin": {
            "line": 6
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $filename on include",
        "severity": "5",
        "lineContent": "include $filename . %22.php%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.NoEvals.NoEvals",
      "location": {
        "path": "SN_full.php",
        "positions": {
          "begin": {
            "line": 14
          }
        }
      },
      "metadata": {
        "description": "Please do not use eval() functions",
        "severity": "5",
        "lineContent": "eval(%22echo \\$data;%22);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "SN_full.php",
        "positions": {
          "begin": {
            "line": 35
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with %22Welcome $name%22 on echo",
        "severity": "5",
        "lineContent": "echo %22Welcome $name%22; // Noncompliant"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Mysqli.WarnMysqlimysqli_query",
      "location": {
        "path": "SN_full.php",
        "positions": {
          "begin": {
            "line": 59
          }
        }
      },
      "metadata": {
        "description": "MYSQLi function mysqli_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "$result = mysqli_query($con, $query);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "SN_full.php",
        "positions": {
          "begin": {
            "line": 92
          }
        }
      },
      "metadata": {
        "description": "Filesystem function unlink() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "unlink(%22/storage/%22 . $userId . %22/%22 . $fileUUID); // Noncompliant"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.SystemExecFunctions.WarnSystemExec",
      "location": {
        "path": "SN_full.php",
        "positions": {
          "begin": {
            "line": 105
          }
        }
      },
      "metadata": {
        "description": "System program execution function exec() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "exec( $binary ); // Noncompliant"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "SN_full.php",
        "positions": {
          "begin": {
            "line": 147
          }
        }
      },
      "metadata": {
        "description": "Crypto function hash_pbkdf2 used.",
        "severity": "5",
        "lineContent": "$hash = hash_pbkdf2(%27sha256%27, $password, $email, 100000); // Noncompliant; salt (3rd argument) is predictable because initialized with the provided $email"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "SN_full.php",
        "positions": {
          "begin": {
            "line": 149
          }
        }
      },
      "metadata": {
        "description": "Crypto function hash_pbkdf2 used.",
        "severity": "5",
        "lineContent": "$hash = hash_pbkdf2(%27sha256%27, $password, %27%27, 100000); // Noncompliant; salt is empty"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "SN_full.php",
        "positions": {
          "begin": {
            "line": 151
          }
        }
      },
      "metadata": {
        "description": "Crypto function hash_pbkdf2 used.",
        "severity": "5",
        "lineContent": "$hash = hash_pbkdf2(%27sha256%27, $password, %27D8VxSmTZt2E2YV454mkqAY5e%27, 100000); // Noncompliant; salt is hardcoded"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "SN_full.php",
        "positions": {
          "begin": {
            "line": 153
          }
        }
      },
      "metadata": {
        "description": "Crypto function crypt used.",
        "severity": "5",
        "lineContent": "$hash = crypt($password); // Noncompliant; salt is not provided; fails in PHP 8"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "SN_full.php",
        "positions": {
          "begin": {
            "line": 154
          }
        }
      },
      "metadata": {
        "description": "Crypto function crypt used.",
        "severity": "5",
        "lineContent": "$hash = crypt($password, %22%22); // Noncompliant; salt is hardcoded; fails in PHP 8"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "SN_full.php",
        "positions": {
          "begin": {
            "line": 158
          }
        }
      },
      "metadata": {
        "description": "Crypto function mcrypt_create_iv used.",
        "severity": "5",
        "lineContent": "%27salt%27 => mcrypt_create_iv(22, MCRYPT_DEV_URANDOM), // Noncompliant ; use salt generated by default"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "SN_full.php",
        "positions": {
          "begin": {
            "line": 160
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with password_hash on echo",
        "severity": "5",
        "lineContent": "echo password_hash(%22rasmuslerdorf%22, PASSWORD_BCRYPT, $options);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "SN_full.php",
        "positions": {
          "begin": {
            "line": 160
          }
        }
      },
      "metadata": {
        "description": "Crypto function password_hash used.",
        "severity": "5",
        "lineContent": "echo password_hash(%22rasmuslerdorf%22, PASSWORD_BCRYPT, $options);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 6
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on echo",
        "severity": "5",
        "lineContent": "echo %22bbbb%22 . $_POST[%27b%27];"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSerr",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 6
          }
        }
      },
      "metadata": {
        "description": "Easy XSS detected because of direct user input with $_POST on echo",
        "severity": "5",
        "lineContent": "echo %22bbbb%22 . $_POST[%27b%27];"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.PregReplace.PregReplaceE",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 9
          }
        }
      },
      "metadata": {
        "description": "Usage of preg_replace with /e modifier is not recommended.",
        "severity": "5",
        "lineContent": "preg_replace(%22/.*/ei%22, %27aaaaaaa%27, %27bbbbb%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.PregReplace.PregReplaceE",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 10
          }
        }
      },
      "metadata": {
        "description": "Usage of preg_replace with /e modifier is not recommended.",
        "severity": "5",
        "lineContent": "preg_replace(%22/.*/ei%22, $_GET[%27a%27], %27aaaaaaa%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.PregReplace.PregReplaceUserInputE",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 10
          }
        }
      },
      "metadata": {
        "description": "User input and /e modifier found in preg_replace, remote code execution possible.",
        "severity": "5",
        "lineContent": "preg_replace(%22/.*/ei%22, $_GET[%27a%27], %27aaaaaaa%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.PregReplace.PregReplaceUserInput",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 11
          }
        }
      },
      "metadata": {
        "description": "User input found in preg_replace, /e modifier could be used for malicious intent.",
        "severity": "5",
        "lineContent": "preg_replace($_GET[%27b%27], $_GET[%27a%27], $_GET[%27c%27]);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.PregReplace.PregReplaceDyn",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 12
          }
        }
      },
      "metadata": {
        "description": "Dynamic usage of preg_replace, please check manually for /e modifier or user input.",
        "severity": "5",
        "lineContent": "preg_replace($b, $_GET[%27a%27], %27aaaaaa%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.PregReplace.PregReplaceWeird",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 13
          }
        }
      },
      "metadata": {
        "description": "Weird usage of preg_replace, please check manually for /e modifier.",
        "severity": "5",
        "lineContent": "preg_replace(%22aaa%22, $_GET[%27a%27], %27ababaaa%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 17
          }
        }
      },
      "metadata": {
        "description": "Crypto function md5 used.",
        "severity": "5",
        "lineContent": "md5();"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Phpinfos.WarnPhpinfo",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 18
          }
        }
      },
      "metadata": {
        "description": "phpinfo() function detected",
        "severity": "5",
        "lineContent": "phpinfo();"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FunctionHandlingFunctions.WarnFunctionHandling",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 19
          }
        }
      },
      "metadata": {
        "description": "Function handling function create_function() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "create_function($a);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FringeFunctions.WarnFringestuff",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 20
          }
        }
      },
      "metadata": {
        "description": "Unusual function ftp_exec() detected",
        "severity": "5",
        "lineContent": "ftp_exec($a);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 21
          }
        }
      },
      "metadata": {
        "description": "Filesystem function fread() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "fread($a);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CallbackFunctions.WarnCallbackFunctions",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 22
          }
        }
      },
      "metadata": {
        "description": "Function array_map() that supports callback detected",
        "severity": "5",
        "lineContent": "array_map($a);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Backticks.WarnSystemExec",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 23
          }
        }
      },
      "metadata": {
        "description": "System execution with backticks detected with dynamic parameter",
        "severity": "5",
        "lineContent": "`$a`;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Backticks.ErrSystemExec",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 24
          }
        }
      },
      "metadata": {
        "description": "System execution with backticks detected with dynamic parameter directly from user input",
        "severity": "5",
        "lineContent": "`$_GET`;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.Misc.IncludeMismatch.ErrMiscIncludeMismatchNoExt",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 25
          }
        }
      },
      "metadata": {
        "description": "No file extension has been found in a include/require function. This implies that some PHP code is not scanned by PHPCS.",
        "severity": "5",
        "lineContent": "include($a);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyRFI.WarnEasyRFI",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 25
          }
        }
      },
      "metadata": {
        "description": "Possible RFI detected with $a on include",
        "severity": "5",
        "lineContent": "include($a);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Asserts.WarnFunctionHandling",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 26
          }
        }
      },
      "metadata": {
        "description": "Assert eval function assert() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "assert($a);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.Asserts.ErrFunctionHandling",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 27
          }
        }
      },
      "metadata": {
        "description": "Assert eval function assert() detected with dynamic parameter directly from user input",
        "severity": "5",
        "lineContent": "assert($_GET);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.SystemExecFunctions.WarnSystemExec",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 28
          }
        }
      },
      "metadata": {
        "description": "System program execution function exec() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "exec($a);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.SystemExecFunctions.ErrSystemExec",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 29
          }
        }
      },
      "metadata": {
        "description": "System program execution function exec() detected with dynamic parameter directly from user input",
        "severity": "5",
        "lineContent": "exec($_GET);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.SQLFunctions.WarnSQLFunction",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 30
          }
        }
      },
      "metadata": {
        "description": "SQL function mysql_query() detected with dynamic parameter ",
        "severity": "5",
        "lineContent": "mysql_query($a);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.SQLFunctions.ErrSQLFunction",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 31
          }
        }
      },
      "metadata": {
        "description": "SQL function mysql_query() detected with dynamic parameter  directly from user input",
        "severity": "5",
        "lineContent": "mysql_query($_GET);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.WarnCryptoFunc",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 35
          }
        }
      },
      "metadata": {
        "description": "Crypto function mcrypt_encrypt used.",
        "severity": "5",
        "lineContent": "mcrypt_encrypt();"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.CryptoFunctions.ErrPCKS1Crypto",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 36
          }
        }
      },
      "metadata": {
        "description": "Bad use of openssl_public_encrypt without OPENSSL_PKCS1_OAEP_PADDING",
        "severity": "5",
        "lineContent": "openssl_public_encrypt($i,$e,$k, OPENSSL_PKCS1_PADDING);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.Drupal8.CVE20134113.CVE-2013-4113",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 39
          }
        }
      },
      "metadata": {
        "description": "CVE-2013-4113 ext/xml/xml.c in PHP before 5.3.27 does not properly consider parsing depth, which allows remote attackers to cause a denial of service (heap memory corruption) or possibly have unspecified other impact via a crafted document that is processed by the xml_parse_into_struct function.",
        "severity": "5",
        "lineContent": "xml_parse_into_struct(xml_parser_create_ns(), str_repeat(%22<blah>%22, 1000), $a);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.Drupal8.CVE20132110.CVE-2013-2110",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 40
          }
        }
      },
      "metadata": {
        "description": "CVE-2013-2110 Heap-based buffer overflow in the php_quot_print_encode function in ext/standard/quot_print.c in PHP before 5.3.26 and 5.4.x before 5.4.16 allows remote attackers to cause a denial of service (application crash) or possibly have unspecified other impact via a crafted argument to the quoted_printable_encode function.",
        "severity": "5",
        "lineContent": "quoted_printable_encode(str_repeat(%22\\xf4%22, 1000));"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.Misc.BadCorsHeader.WarnPCKS1Crypto",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 43
          }
        }
      },
      "metadata": {
        "description": "Bad CORS header detected.",
        "severity": "5",
        "lineContent": "$a->withHeader(%27Access-Control-Allow-Origin%27, %27*%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.Misc.IncludeMismatch.ErrMiscIncludeMismatch",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 44
          }
        }
      },
      "metadata": {
        "description": "The file extension %27.xyz%27 that is not specified by --extensions has been used in a include/require function. Please add it to the scan process.",
        "severity": "5",
        "lineContent": "include(%27abc.xyz%27);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 48
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on print",
        "severity": "5",
        "lineContent": "print(%22aaa%22 . $_GET[%27a%27]);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSerr",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 48
          }
        }
      },
      "metadata": {
        "description": "Easy XSS detected because of direct user input with $_GET on print",
        "severity": "5",
        "lineContent": "print(%22aaa%22 . $_GET[%27a%27]);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSerr",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 49
          }
        }
      },
      "metadata": {
        "description": "Easy XSS detected because of direct user input with $_GET on echo",
        "severity": "5",
        "lineContent": "echo($_GET[%27a%27]);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSerr",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 50
          }
        }
      },
      "metadata": {
        "description": "Easy XSS detected because of direct user input with $_GET on echo",
        "severity": "5",
        "lineContent": "echo $_GET[%27a%27];"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 51
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with %22{$_GET[%27a%27]}%22 on echo",
        "severity": "5",
        "lineContent": "echo %22{$_GET[%27a%27]}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 52
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with %22${_GET[%27a%27]}%22 on print",
        "severity": "5",
        "lineContent": "print %22${_GET[%27a%27]}%22;"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 53
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with a on echo",
        "severity": "5",
        "lineContent": "echo a($_GET[%27b%27]);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSerr",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 53
          }
        }
      },
      "metadata": {
        "description": "Easy XSS detected because of direct user input with $_GET on echo",
        "severity": "5",
        "lineContent": "echo a($_GET[%27b%27]);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 54
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with allo on echo",
        "severity": "5",
        "lineContent": "echo (allo(a($_GET[%27c%27])));"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSerr",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 54
          }
        }
      },
      "metadata": {
        "description": "Easy XSS detected because of direct user input with $_GET on echo",
        "severity": "5",
        "lineContent": "echo (allo(a($_GET[%27c%27])));"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 55
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with arg on echo",
        "severity": "5",
        "lineContent": "echo arg(1);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 56
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on die",
        "severity": "5",
        "lineContent": "die( %22%22 . $_GET[%27a%27] );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSerr",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 56
          }
        }
      },
      "metadata": {
        "description": "Easy XSS detected because of direct user input with $_GET on die",
        "severity": "5",
        "lineContent": "die( %22%22 . $_GET[%27a%27] );"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 57
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with . on exit",
        "severity": "5",
        "lineContent": "exit(%22exit%22 . $_GET[%27a%27]);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSerr",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 57
          }
        }
      },
      "metadata": {
        "description": "Easy XSS detected because of direct user input with $_GET on exit",
        "severity": "5",
        "lineContent": "exit(%22exit%22 . $_GET[%27a%27]);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSerr",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 59
          }
        }
      },
      "metadata": {
        "description": "Easy XSS detected because of direct user input with $_GET on <?=",
        "severity": "5",
        "lineContent": "<?= $_GET[%27a%27] ?>"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnSymlink",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 64
          }
        }
      },
      "metadata": {
        "description": "Allowing symlink() while open_basedir is used is actually a security risk. Disabled by default in Suhosin >= 0.9.6",
        "severity": "5",
        "lineContent": "symlink($a);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.FilesystemFunctions.WarnFilesystem",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 64
          }
        }
      },
      "metadata": {
        "description": "Filesystem function symlink() detected with dynamic parameter",
        "severity": "5",
        "lineContent": "symlink($a);"
      }
    },
    {
      "type": "sast",
      "ruleId": "PHPCS_SecurityAudit.BadFunctions.EasyXSS.EasyXSSwarn",
      "location": {
        "path": "vulnerabilities.php",
        "positions": {
          "begin": {
            "line": 88
          }
        }
      },
      "metadata": {
        "description": "Possible XSS detected with $count on echo",
        "severity": "5",
        "lineContent": "echo $count;"
      }
    }
  ]
}
